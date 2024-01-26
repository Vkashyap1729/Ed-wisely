import MuiColumnChart from './components/MuiColumnChart'
import DashBordCards from './components/DashBordCards'
import LeaderBoardCard from './components/LeaderBoardCard'
import Navbar from './components/Navbar'
import MainHeader from './components/MainHeader'
import Content from './components/Content'
import { Box } from '@mui/material'
import CourseCards from './components/CourseCards'
import useFetchData from './CustomHooks'
import { useEffect } from 'react'
const App = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <Content />
    </div>
  )
}
export default App
