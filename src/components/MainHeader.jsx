import { Box, Stack, Typography } from '@mui/material'
import MainHeaderImage from '../assets/MainHeaderImage'
import { useState } from 'react'

const MainHeader = () => {
  const [name, setName] = useState('Maharram')
  const styles = {
    color: 'var(--Basic-700, #2E3A59)',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
  }
  return (
    <Box
      width={'94vw'}
      height={'80px'}
      border={'2px solid black'}
      position={'absolute'}
      left={'6vw'}
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
