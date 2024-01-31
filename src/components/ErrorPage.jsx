import * as React from 'react'
import { Box, Button } from '@mui/material'
export default function ErrorPage(props) {
  console.log(props)
  return (
    <>
      <Box justifyContent={'center'} sx={{ display: 'flex' }}>
        {props.msg}
      </Box>
      {props.resetErrorBoundary && (
        <Box justifyContent={'center'} sx={{ display: 'flex' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={window.location.reload()}
          >
            Try Again!
          </Button>
        </Box>
      )}
    </>
  )
}
