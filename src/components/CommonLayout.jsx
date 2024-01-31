// import React from 'react'
// import Navbar from './Navbar'
// import MainHeader from './MainHeader'
// import { Stack, Box } from '@mui/material'

// const CommonLayout = ({ children }) => {
//   return (
//     <Stack
//       direction={'row'}
//       sx={{
//         width: '100%',
//         maxWidth: '1500px',
//         // margin: '0 auto',
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: '80px',
//           // width: '60px',
//           width: '9%',
//           height: '100vh',
//           position: 'fixed',
//         }}
//       >
//         <Navbar />
//       </Box>
//       <Stack
//         sx={{
//           flex: 1,
//           marginLeft: '80px',
//           width: '90%',
//         }}
//       >
//         <MainHeader />
//         {children}
//       </Stack>
//     </Stack>
//   )
// }
// export default CommonLayout
import Navbar from './Navbar'
import MainHeader from './MainHeader'
import { Stack, Box } from '@mui/material'

//
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const drawerWidth = 80
const CommonLayout = ({ children }) => {
  return (
    // <Stack
    //   direction={'row'}
    //   sx={{
    //     width: '100%',
    //     maxWidth: '1500px',
    //     margin: 0,
    //     padding: 0,
    //     position: 'relative',
    //   }}
    // >
    //   <Stack
    //     sx={{
    //       width: '10%',
    //       maxWidth: '80px',
    //       height: '100vh',
    //       position: 'absolute',
    //       left: 0,
    //       // position: 'fixed',
    //     }}
    //   >
    //     <Navbar />
    //   </Stack>
    //   <Stack
    //     sx={{
    //       flex: 1,
    //       position: 'absolute',
    //       left: '80px',
    //       width: '90%', // Adjusted to dynamically calculate the width
    //     }}
    //   >
    //     <MainHeader />
    //     {children}
    //   </Stack>
    // </Stack>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: '#FFF',
        }}
      >
        <Toolbar>
          <MainHeader />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Navbar />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          width: drawerWidth,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default CommonLayout
