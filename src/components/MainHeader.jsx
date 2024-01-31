import { Box, Stack, Typography } from '@mui/material'
import MainHeaderImage from '../assets/MainHeaderImage'

const MainHeader = ({ name = 'Maharram' }) => {
  return (
    <>
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '80px',
          paddingLeft: '25px',
          paddingRight: '40px',
          borderBottom: '1px solid #DFE3E8',
        }}
      >
        <Typography
          sx={{
            color: 'var(--Basic-700, #2E3A59)',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '32px',
          }}
        >
          Good morning, {name} <span>👋</span>
        </Typography>
        <MainHeaderImage />
      </Stack>
    </>
  )
}
export default MainHeader
