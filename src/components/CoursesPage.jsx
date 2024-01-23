import {
  Stack,
  Typography,
  Box,
  Menu,
  MenuItem,
  MenuList,
  FormControlLabel,
} from '@mui/material'
import Arrow from '../assets/Arrow'
import UnitsCard from './UnitsCard'
import Units from './Units'
import { useState } from 'react'
import DropDown from '../assets/DropDown'
const CoursesPage = () => {
  const title = 'Machine Learning A-Z™: Hands-On Python & R In Data...'
  const percentage = 76
  const bgcolor = '#E7EEFE'
  const chipname = 'design'
  const color = '#0B58F5'

  return (
    <Box>
      <Stack
        sx={{
          flexDirection: 'row',
          gap: '20px',
          marginLeft: '33.5px',
          marginTop: '34.29px',
        }}
      >
        <Arrow />
        <Typography
          sx={{
            color: '#161C24',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.25px',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: color,
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '12px',
            textTransform: 'uppercase',
            backgroundColor: bgcolor,
          }}
        >
          {chipname}
        </Typography>
      </Stack>
      <Box
        sx={{
          marginTop: '26px',
          marginLeft: '85px',
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '12px',
          }}
        >
          <Box
            sx={{
              width: '213px',
              height: '5px',
              bgcolor: '#E7E7E7',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                width: percentage,
                height: '5px',
                bgcolor: '#0B58F5',
                borderRadius: '10px',
              }}
            ></Box>
          </Box>
          <Typography
            sx={{
              color: '#0B58F5',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Avg. {percentage}%
          </Typography>
        </Stack>

        <Box
          sx={{
            marginTop: '27px',
          }}
        >
          <Typography
            sx={{
              color: '#000',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            What you will learn
          </Typography>
          <Typography
            sx={{
              marginTop: ' 8px',
              color: '#00000',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
          >
            Understand how to solve the given standard partial differential
            equations.\nSolve differential equations using Fourier series
            analysis which plays a vital role in engineering
            applications.\nAppreciate the physical significance of Fourier
            series techniques in solving one and two dimensional heat flow
            problems and one-dimensional wave equations.\nUnderstand the
            mathematical principles on transforms and partial differential
            equations would provide them the ability to formulate and solve some
            of the physical problems of engineering.\nUse the effective
            mathematical tools for the solutions of partial differential
            equations by using Z transform techniques for discrete time systems.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: '40px', marginLeft: '56px' }}>
        <Typography
          sx={{
            color: '#00000',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            my: '10px',
          }}
        >
          Continue reading
        </Typography>
        <Stack direction={'row'}>
          <UnitsCard />
          <UnitsCard />
          <UnitsCard />
        </Stack>
        <Box>
          <Box display={'flex'}>
            <Typography
              sx={{
                color: '#919EAB',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 'normal',
              }}
            >
              <Units />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default CoursesPage
