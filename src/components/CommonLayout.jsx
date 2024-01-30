import React from 'react'
import Navbar from './Navbar'
import MainHeader from './MainHeader'
import { Stack, Box } from '@mui/material'

const CommonLayout = ({ children }) => {
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
          height: '100vh',
          position: 'fixed',
        }}
      >
        <Navbar />
      </Box>
      <Stack
        sx={{
          flex: 1,
          marginLeft: '80px',
          // padding: '16px',
        }}
      >
        <MainHeader />
        {children}
      </Stack>
    </Stack>
  )
}
export default CommonLayout
