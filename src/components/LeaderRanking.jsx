import { Avatar, Box, Stack, Typography, Badge } from '@mui/material'
import React from 'react'

const LeaderRanking = ({ data, index, value, rank, col, fontcol }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Stack direction={'row'} alignItems={'center'} gap={'27px'}>
        <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
          <Avatar
            alt="Avatar"
            sx={{ width: 30, height: 30 }}
            src={data.profile_pic}
          />
          <Stack>
            <Typography
              component={'p'}
              sx={{
                fontFamily: 'Poppins-Medium',
                fontSize: '14px',
                color: (theme) => theme.palette.grey[900],
              }}
            >
              {data.name}
            </Typography>
            <Typography
              component={'p'}
              sx={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: '14px',
                color: (theme) => theme.palette.warning.main,
              }}
            >
              {value}%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Box
          sx={{
            width: '26px',
            height: '26px',
            bgcolor: col,
            borderRadius: '13px',
            flexShrink: 0,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              color: fontcol,
              textAlign: 'start', // Assuming you want to start-aligned text
              textRendering: 'optimizeLegibility', // For better text rendering
            }}
          >
            {rank}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default LeaderRanking
