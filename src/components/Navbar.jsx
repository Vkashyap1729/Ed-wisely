import Dashbord from '../assets/Dashbord'
import Logo from '../assets/Logo'
import Book from '../assets/Book'
import Logout from '../assets/Logout'
import { Box, Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Box position="fixed">
      <Stack
        direction="column"
        bgcolor="#F4F6F8"
        width="6vw"
        height="100vh"
        alignItems="center"
        spacing={4}
      >
        <Logo />
        <Dashbord />
        <Book />
        <Logout />
      </Stack>
    </Box>
  )
}
export default Navbar
