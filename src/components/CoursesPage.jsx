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
import ProgressBar from './ProgressBar'
import useFetchData from '../CustomHooks'
import CommonLayout from './CommonLayout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { login, logout } from './authSlice'
import { useDispatch, useSelector } from 'react-redux'
const CoursesPage = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const handleLogout = () => {
    dispatch(logout())
  }
  const fetchDataFromApi = async (id) => {
    try {
      const response = await fetch(
        `https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${id}`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }
  const { id } = useParams()
  const { assessmentsData, error, isLoading, setAssessmentsData } =
    useFetchData(() => fetchDataFromApi(id))
  const bgcolor = '#E7EEFE'
  const color = '#0B58F5'
  const { data } = { ...assessmentsData }
  const { name, tag, percentage, description, continue_reading, units } = {
    ...data,
  }
  const contentArray = description
    ? description.split('\n').filter((item) => item.trim() !== '')
    : []
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  const continueReadingArray = continue_reading || []
  if (!isLoggedIn) {
    return <p>plz login...</p>
  }
  return (
    <CommonLayout>
      <Box>
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '20px',
            marginLeft: '33.5px',
            marginTop: '34.29px',
            alignItems: 'center',
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
            {name}
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              padding: '4px 6px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: bgcolor,
            }}
          >
            <Typography
              sx={{
                color: color,
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '12px',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </Typography>
          </Box>
        </Stack>
        <Box width={'330px'} margin={'10px 0 0  80px'}>
          <ProgressBar value={percentage} />
        </Box>
        <Box
          sx={{
            marginTop: '26px',
            marginLeft: '85px',
          }}
        >
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
                minWidth: '600px',
                width: '100%',
                maxWidth: '1095px',
              }}
            >
              {contentArray.map((item, index) => (
                <div key={index}>
                  <Typography variant="body1" component="span">
                    •
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    ml={1}
                    sx={{
                      color: '#00000',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      lineHeight: 'normal',
                    }}
                  >
                    {item}
                  </Typography>
                </div>
              ))}
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
          <Stack direction={'row'} spacing={'22px'}>
            {continueReadingArray.map((item) => (
              <UnitsCard name={item.name} url={item.url} />
            ))}
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
                <Units units={units} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </CommonLayout>
  )
}
export default CoursesPage
