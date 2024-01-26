import { Box, Stack, Typography } from '@mui/material'
import MainHeaderImage from '../assets/MainHeaderImage'

const MainHeader = ({ name = 'Maharram' }) => {
  const styles = {
    color: 'var(--Basic-700, #2E3A59)',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
  }
  return (
    <Box
      sx={{
        width: '94vw',
        height: {
          sm: '60px', // Height for small screens
          md: '60px', // Height for medium screens
          lg: '80px', // Height for large screens
          xl: '80px',
        },
        position: 'absolute',
        left: '6vw',
      }}
    >
      <Stack
        direction="row"
        justifyContent={'space-between'}
        alignItems={'center'}
        marginTop={2}
      >
        <Typography style={styles} marginLeft={2}>
          Good morning, {name} <span>👋</span>
        </Typography>
        <MainHeaderImage />
      </Stack>
    </Box>
  )
}
export default MainHeader
