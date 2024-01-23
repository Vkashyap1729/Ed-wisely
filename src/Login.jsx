import { Box, Button, Typography } from '@mui/material'
import LogingpageImage from './assets/LogingpageImage'
import ShowPsd from './assets/ShowPsd'
const Login = () => {
  return (
    <Box>
      <Box display={'flex'} flexDirection={'row'} width={'50vw'}>
        <Box position={'relative'}>
          <LogingpageImage />
          <Box
            position={'absolute'}
            top={'84px'}
            left={'86px'}
            width={'405px'}
            height={'121px'}
          >
            <Typography
              sx={{
                color: '#FFF',
                //   fontFamily: 'Poppins',
                fontSize: '57.251px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '50.094px',
              }}
            >
              Welcome to
              <Typography
                sx={{
                  color: '#FFF',
                  // fontFamily: 'Poppins',
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
                  //   fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                Login to access your account
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box position={'absolute'} left={'834px'} top={'204px'}>
          <Typography
            sx={{
              color: '#161C24',
              //   fontFamily: 'Poppins',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            Login
            <Typography
              sx={{
                color: '#161C24',
                // fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              }}
            >
              Enter your account details
            </Typography>
          </Typography>
          <form action="">
            <Box display="flex" flexDirection="column">
              <input type="text" placeholder="username" />
              <Box display={'flex'} flexDirection={'row'}>
                <input type="password" placeholder="password" />
                <ShowPsd />
              </Box>
              <Box display={'flex'} flexDirection={'row'}>
                <input type="checkbox" />
                <Typography
                  sx={{
                    color: '#919EAB',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  <label htmlFor="">Remember me</label>
                </Typography>
              </Box>
              <Button
                sx={{
                  borderRadius: '10px',
                }}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
export default Login
