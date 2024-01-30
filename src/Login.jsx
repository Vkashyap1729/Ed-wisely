import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  Box,
  Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
// import ShowPsd from './assets/ShowPsd'
import LoginImg from './assets/LoginImage.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './components/authSlice'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const loginUser = async (username, password) => {
    try {
      const response = await fetch(
        `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`
      )

      if (response.ok) {
        navigate('/dashbord')
        dispatch(login())
      } else {
        alert('Invalid username or password')
      }
    } catch (error) {
      console.error('Error during fetch:', error)
    }
  }
  const handleLogin = () => {
    loginUser((username, password))
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <Stack direction="row" spacing={0} sx={{ width: '100%', height: '100vh' }}>
      <Box
        sx={{
          flex: '1',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={LoginImg}
          alt="LoginImg"
          sx={{
            width: '100%',
            height: '100%',
            aspectRatio: '44/41',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '84px',
          left: '86px',
        }}
      >
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '57.251px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '50.094px',
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '57.251px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '50.094px',
          }}
        >
          student portal
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            my: '9px',
          }}
        >
          Login to access your account
        </Typography>
      </Box>
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          sx={{
            maxWidth: '400px',
            maxHeight: '300px',
          }}
        >
          <Typography
            sx={{
              color: '#161C24',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            Login
          </Typography>
          <Typography
            sx={{
              color: '#161C24',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              my: '12px',
            }}
          >
            Enter your account details
          </Typography>
          <FormControl>
            <InputLabel htmlFor="name"></InputLabel>
            <Input
              id="name"
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputLabel htmlFor="password" />
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormControlLabel
              control={<Checkbox id="rememberMe" />}
              label="Remember Me"
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  )
}
export default Login
