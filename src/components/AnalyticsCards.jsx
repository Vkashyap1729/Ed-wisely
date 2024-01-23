import React from 'react'
import { Box, Typography } from '@mui/material'
import Coding from '../assets/Coding'
import Asignment from '../assets/Asignment'
import Assessments from '../assets/Assessments'
import AvgPerformance from '../assets/AvgPerformance'
import Attandance from '../assets/Attandance'

const AnalyticsCards = ({
  name = 'Coding',
  percentage = '25%',
  iconComponent = {},
  backgroundColor = '#EDFAEE',
}) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        border: '1px solid #F4F6F8',
        background: '#FFF',
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
        display: 'flex',
        width: '230px',
        padding: '10px 27px 10px 10px',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <Box display={'flex'} flexDirection={'row'}>
        <Box
          sx={{
            borderRadius: '5px',
            background: backgroundColor,
            display: 'flex',
            padding: '15px',
            alignItems: 'flex-start',
            gap: '10px',
          }}
        >
          {iconComponent}
        </Box>
        <Box mx={'15px'}>
          <Typography
            sx={{
              color: 'var(--On-hover-Stroke, #919EAB)',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              marginBottom: '15px',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: '#161C24',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {percentage}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AnalyticsCards
