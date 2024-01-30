import { Box, Stack, Typography } from '@mui/material'
import DashBordCards from './DashBordCards'
import UserProfile from './UserProfile'
import Calander from './Calander'
import CourseCards from './CourseCards'
import useFetchData from '../CustomHooks'
import LeaderBoardCard from '../components/LeaderBoardCard'
import Bargraph from '../components/Bargraph'
import MuiCustomTable from '../components/MuiCustomTable'
import CommonLayout from './CommonLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './authSlice'
import PdfViewer from './PdfViewer'
import './Dashbord.css'
const Dashbord = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
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
  const { assessmentsData, error, isLoading, setAssessmentsData } =
    useFetchData(fetchDataFromApi)
  const {
    name,
    email,
    profile_picture,
    analytics,
    recent_assessments,
    leaderboard,
    courses,
  } = {
    ...assessmentsData,
  }
  const { analysis, title, xtitle, ytitle } = { ...recent_assessments }
  const { attendance, avg_performance, assessment, assignment, coding } = {
    ...analytics,
  }
  const coursesData = Object.values({ ...courses })

  const colors = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
  const bgcolors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  if (!isLoggedIn) {
    return <p>please login</p>
  }
  if (isLoggedIn) {
    return (
      <CommonLayout>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <DashBordCards analytics={analytics} />
          <Stack direction={'row'} marginTop={'30px'} spacing={2}>
            <Stack
              justifyContent={'space-between'}
              sx={{ maxWidth: '897px', width: '100%', minWidth: '600px' }}
            >
              <Box
                sx={{
                  borderRadius: '10px',
                  border: '1px solid #F4F6F8',
                  background: '#FFF',
                  boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                }}
              >
                <Bargraph analysis={analysis} />
              </Box>
              <Box
                sx={{
                  borderRadius: '10px',
                  border: '1px solid #F4F6F8',
                  background: '#FFF',
                  boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                }}
              >
                <MuiCustomTable />
              </Box>
            </Stack>
            <Stack
              spacing={'20px'}
              sx={{ maxWidth: '319px', width: '100%', minWidth: '100px' }}
            >
              <UserProfile name={name} email={email} imgUrl={profile_picture} />
              <Calander />

              <LeaderBoardCard leaderboard={leaderboard} />
            </Stack>
          </Stack>

          <Typography
            sx={{
              color: 'var(--Basic-700, #2E3A59)',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '28px',
              my: '15px',
            }}
          >
            Your courses
          </Typography>
          <Stack direction={'row'} spacing={2}>
            {coursesData.map((course, index) => (
              <CourseCards
                key={course.id}
                chipname={course.tag}
                name={course.name}
                imgUrl={course.image}
                color={colors[course.id - 1]}
                bgcolor={bgcolors[course.id - 1]}
                index={index}
              />
            ))}
          </Stack>
        </Box>
      </CommonLayout>
    )
  }
}
export default Dashbord
