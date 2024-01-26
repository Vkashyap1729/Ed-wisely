import { Box } from '@mui/material'
import Dashbord from './Dashbord'
import CourseCards from './CourseCards'
import CoursesPage from './CoursesPage'

const Content = () => {
  return (
    <Box
      top={'80px'}
      left={'6vw'}
      width={'94vw'}
      // border={'2px solid black'}
      position={'absolute'}
    >
      <Dashbord />
      {/* <CoursesPage /> */}
    </Box>
  )
}
export default Content
