import Dashbord from '../assets/Dashbord'
import Logo from '../assets/Logo'
import Book from '../assets/Book'
import Logout from '../assets/Logout'
import { Button, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logout } from './authSlice'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <Stack
      direction={'column'}
      justifyContent={'space-between'}
      bgcolor='#F4F6F8'
      height='100%'
      width='100%'
      alignItems='center'
    >
      <Stack direction='column' alignItems='center' spacing={4}>
        <Logo />
        <Dashbord />
        <Book />
      </Stack>
      <Button
        onClick={handleLogout}
        sx={{
          marginBottom: '16px',
        }}
      >
        <Logout />
      </Button>
    </Stack>
  )
}
export default Navbar
