import React from 'react'
import Navbar from './Navbar'
import MainHeader from './MainHeader'
import { Stack, Box } from '@mui/material'

const CommonLayout = ({ children }) => {
  return (
    <Stack direction={'row'}>
      <Box
        sx={{
          // minWidth: '60px',
          width: '10%',
          maxWidth: '80px',
          height: '100%',
          position: 'fixed',
          // position: 'absolute',
          left: 0,
        }}
      >
        <Navbar />
      </Box>
      <Stack
        sx={{
          // minWidth: '820px',
          width: '90%',
          maxWidth: '1420px',
          position: 'relative',
          left: '80px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            minHeight: '60px',
            maxHeight: '80px',
          }}
        >
          <MainHeader />
        </Box>
        <Box
          sx={{
            // minWidth: '820px',
            width: '100%',
            // maxWidth: '1420px',
          }}
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  )
}
export default CommonLayout
