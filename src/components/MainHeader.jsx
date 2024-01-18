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
    <Stack
      direction="row"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography style={styles} marginLeft={2}>
        Good morning, {name} <span>👋</span>
      </Typography>
      <MainHeaderImage />
    </Stack>
  )
}
export default MainHeader
