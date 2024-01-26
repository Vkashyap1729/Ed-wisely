import { Box, Grid, Stack, Typography } from '@mui/material'
import DashBordCards from './DashBordCards'
import UserProfile from './UserProfile'
import Calander from './Calander'
import CourseCards from './CourseCards'
import useFetchData from '../CustomHooks'
import LeaderBoardCard from '../components/LeaderBoardCard'
import LeaderRanking from './LeaderRanking'
const Dashbord = () => {
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
  ]
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
  const { name, email, profile_picture, analytics, courses } = {
    ...assessmentsData,
  }
  const { attendance, avg_performance, assessment, assignment, coding } = {
    ...analytics,
  }
  const coursesData = Object.values({ ...courses })

  // console.log(assessmentsData)
  const colors = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
  const bgcolors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']
  // console.log(coursesData)

  return (
    <Box padding={2}>
      <DashBordCards analytics={analytics} />
      <Typography
        sx={{
          color: '#212B36',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
          marginBottom: '8px',
        }}
      >
        User profile
      </Typography>
      <UserProfile name={name} email={email} imgUrl={profile_picture} />
      <Typography
        sx={{
          color: 'var(--Basic-700, #2E3A59)',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
          marginTop: '30px',
        }}
      >
        Calendar
      </Typography>
      <Calander />
      <LeaderBoardCard />

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
        {coursesData.map((course) => (
          <CourseCards
            key={course.id}
            chipname={course.tag}
            name={course.name}
            imgUrl={course.image}
            color={colors[course.id - 1]}
            bgcolor={bgcolors[course.id - 1]}
          />
        ))}
      </Stack>
    </Box>
  )
}
export default Dashbord
