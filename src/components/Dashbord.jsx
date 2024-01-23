import { Box, Grid, Stack, Typography } from '@mui/material'
import DashBordCards from './DashBordCards'
import UserProfile from './UserProfile'
import CourseCards from './CourseCards'
import Calander from './Calander'
import LeaderBoardCard from './LeaderBoardCard'
import { BarChart } from '@mui/x-charts/BarChart'
import Bargraph from './Bargraph'
const Dashbord = () => {
  return (
    <Box marginLeft={2}>
      <Grid container>
        <Grid item xs={12}>
          <DashBordCards />
        </Grid>
        <Grid item xs={9}>
          <Box>
            <Typography>Recent Assessments</Typography>
            <Bargraph />
          </Box>
          <Box bgcolor={'blue'}>
            <Typography>Assessments</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Stack>
              <Box>
                <UserProfile />
              </Box>
              <Box>
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
              </Box>
              <Box>
                <LeaderBoardCard />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>Your courses</Typography>
        <Stack direction={'row'} spacing={2}>
          <CourseCards />
          <CourseCards />
          <CourseCards />
          <CourseCards />
        </Stack>
      </Grid>
    </Box>
  )
}
export default Dashbord
