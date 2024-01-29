import { Stack, Box, Typography, Button, Popover } from '@mui/material'
import { useState } from 'react'
import Logout from '../assets/Logout'
import { useDispatch } from 'react-redux'
import { logout } from '../components/authSlice'
import { useNavigate } from 'react-router-dom'
const url =
  'https://edwisely-profile-v2.s3.amazonaws.com/profile/EDS3/158746378221920200421092750.jpg'
const styles = {
  width: '50px',
  height: '50px',
  flexShrink: 0,
  borderRadius: '24px',
  background: `url(${url}), lightgray 50% / cover no-repeat, #C4C4C4`,
  cursor: 'pointer',
}
const MainHeaderImage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <img src={url} alt="" style={styles} onClick={handlePopoverOpen} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: { backgroundColor: 'transparent', boxShadow: 'none' },
        }}
        sx={{
          position: 'absolute',
          right: 0,
        }}
      >
        <Stack
          spacing={'5px'}
          padding={'5px'}
          sx={{
            borderRadius: '15px',
            border: '0.5px solid #DFE3E8',
            background: '#F4F6F8',
            maxWidth: '215px',
            width: '100%',
            minWidth: '150px',
            // width: '215px',
            height: '170px',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <img src={url} alt="" style={styles} />
          <Typography
            sx={{
              color: '#212B36',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
            }}
          >
            Maharrm Hasanli
          </Typography>
          <Typography
            sx={{
              color: '#919EAB',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '16px', // 133.333%
            }}
          >
            maga.hesenli@gmail.com
          </Typography>
          <Button startIcon={<Logout />} onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Popover>
    </Box>
  )
}

export default MainHeaderImage
