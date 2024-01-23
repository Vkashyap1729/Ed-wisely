import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

const UserProfile = ({
  name = 'default name',
  email = 'default@gmail.com',
  imgUrl = 'https://edwisely-profile-v2.s3.amazonaws.com/profile/EDS3/158746378221920200421092750.jpg',
}) => {
  return (
    <div
    // style={{ border: '2px solid black' }}
    >
      <Box>
        <Typography
          my="12px"
          sx={{
            color: '#212B36',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '28px',
          }}
        >
          User Profile
        </Typography>
        <Box
          sx={{
            width: '319px',
            borderRadius: '10px',
            background: '#F4F6F8',
            display: 'flex',
            padding: '10px',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
            }}
          >
            <img
              src={imgUrl}
              alt="userimage"
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              sx={{
                color: '#212B36',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: '#919EAB',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '16px',
              }}
            >
              {email}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default UserProfile
