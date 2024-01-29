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
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  useEffect(() => {
    const storedUsername = localStorage.getItem('rememberMeUsername')
    const storedPassword = localStorage.getItem('rememberMePassword')

    if (storedUsername && storedPassword) {
      setUsername(storedUsername)
      setPassword(storedPassword)
      setRememberMe(true)
    }
  }, [])
  const handleLogin = () => {
    const validUsername = 'demo'
    const validPassword = 'demo'
    console.log(password)
    if (username === validUsername && password === validPassword) {
      navigate('/dashbord')
      dispatch(login())
    } else {
      alert('Invalid username or password')
    }
  }
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe)

    if (!rememberMe) {
      localStorage.setItem('rememberMeUsername', username)
      localStorage.setItem('rememberMePassword', password)
      localStorage.setItem('rememberMe', 'true')
    } else {
      localStorage.removeItem('rememberMeUsername')
      localStorage.removeItem('rememberMePassword')
      localStorage.removeItem('rememberMe')
    }
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <Stack direction={'row'}>
      <Box
        sx={{
          width: '50%',
          height: '100%',
          overflow: 'hidden',
        }}
        position={'relative'}
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
      <Stack
        sx={{
          width: '381px',
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
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <FormControlLabel
            control={
              <Checkbox id="rememberMe" onChange={handleCheckboxChange} />
            }
            label="Remember Me"
          />

          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </FormControl>
      </Stack>
    </Stack>
  )
}
export default Login
