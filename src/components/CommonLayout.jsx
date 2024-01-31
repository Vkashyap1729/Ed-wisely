import React from 'react'
import Navbar from './Navbar'
import MainHeader from './MainHeader'
import { styled, useTheme } from '@mui/material/styles'

import {
  Stack,
  Box,
  AppBar,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  Drawer,
} from '@mui/material'
import Header from './Header'

const drawerWidth = 250
// const drawerWidth = 110;
const drawerTabWidth = 110

const CommonLayout = ({ children }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Stack
      direction={'row'}
      sx={{
        width: '100%',
        maxWidth: '1500px',
        // margin: '0 auto',
      }}
    >
      <Box
        sx={{
          width: '80px',
          height: '100%',
          position: 'absolute',
          left: '0px',
          zIndex: 9999,
        }}
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
