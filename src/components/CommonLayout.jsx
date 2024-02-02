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

const CommonLayout = ({ children }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
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
          width: '80px',
          height: '100%',
          position: 'absolute',
          left: '0px',
          zIndex: 9999,
        }}
        variant="permanent"
        anchor="left"
      >
        <Navbar />
      </Box>

      <MainHeader />

      <Box
        sx={{
          position: 'absolute',
          top: '80px',
          left: '80px',
          padding: '1rem',
        }}
      >
        {children}
      </Box>
    </Stack>
    // <Box sx={{ display: 'flex', background: '#fff' }}>
    //   <CssBaseline />

    //   <AppBar
    //     sx={{
    //       zIndex: 999,
    //       backgroundColor: (theme) => theme.palette.grey[0],
    //       boxShadow: 'none',
    //     }}
    //   >
    //     <Toolbar sx={{ minHeight: '80px' }}>
    //       <Header handleLeftDrawerToggle='' />
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer
    //     variant={matchDownMd ? 'permanent' : 'permanent'}
    //     // variant={matchDownMd ? "temporary" : "permanent"}
    //     open={true}
    //     onClose=''
    //     sx={{
    //       width: matchDownMd ? drawerTabWidth : drawerTabWidth,
    //       flexShrink: 0,
    //       [`& .MuiDrawer-paper`]: {
    //         width: matchDownMd ? drawerTabWidth : drawerTabWidth,
    //         boxSizing: 'border-box',
    //         border: 'none',
    //         p: matchDownMd ? 0 : 0,
    //         overflowY: 'unset',
    //         backgroundColor: (theme) => theme.palette.grey[700],
    //         '&:hover': {
    //           overflowY: 'scroll',
    //           '&::-webkit-scrollbar': {
    //             width: '4px',
    //           },
    //           '&::-webkit-scrollbar-thumb': {
    //             background: theme.palette.grey[600],
    //             borderRadius: '4px',
    //           },
    //           '&::-webkit-scrollbar-thumb:hover': {
    //             background: theme.palette.grey[800],
    //           },
    //         },
    //       },
    //     }}
    //   >
    //     <Toolbar />
    //     {/* {matchDownMd ? <SmallSideBar /> : <SmallSideBar />} */}

    //     {/* <MenuList /> */}
    //     {/* <SideNavBar /> */}
    //   </Drawer>

    //   <Box
    //     component='main'
    //     sx={{
    //       flexGrow: 1,
    //       p: '25px 32px',
    //       background: 'white',
    //       maxWidth: '1536px',
    //     }}
    //   >
    //     <Toolbar />
    //     {/* <ReactErrorBoundary> */}
    //     {children}
    //     {/* </ReactErrorBoundary> */}
    //   </Box>
    // </Box>
  )
}

export default CommonLayout
