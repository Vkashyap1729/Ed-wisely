import Dashbord from '../assets/Dashbord'
import Logo from '../assets/Logo'
import Book from '../assets/Book'
import Logout from '../assets/Logout'
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Stack
      direction="column"
      bgcolor={'#F4F6F8'}
      height={'100vh'}
      alignItems={'center'}
      spacing={4}
      borderRadius={'25px 0 0 25px'}
      // border={'2px solid black'}
    >
      <Logo />
      <Dashbord />
      <Book />
      <Logout />
    </Stack>
  )
}
export default Navbar
