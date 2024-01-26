import { Typography, Box, Stack } from '@mui/material'
import AssessmentDetailCard from './AssessmentDetailCard'
import Asignment from '../assets/Asignment'
import Coding from '../assets/Coding'
import Assessments from '../assets/Assessments'
import AvgPerformance from '../assets/AvgPerformance'
import Attandance from '../assets/Attandance'
const DashBordCards = ({ analytics }) => {
  const { attendance, avg_performance, assessment, assignment, coding } = {
    ...analytics,
  }
  return (
    <Box
      sx={{
        marginTop: '1',
        // width: '90vw',
      }}
    >
      <Typography
        my={'20px'}
        sx={{
          color: 'var(--Basic-700, #2E3A59)',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '28px',
        }}
      >
        Dashboard
      </Typography>
      <Stack direction={'row'} spacing={'24px'}>
        <AssessmentDetailCard
          icon={<Attandance />}
          iconBgColor="#E7EEFE"
          iconSize={10}
          title="Attendance"
          contentMagnitude={parseInt(attendance, 10)}
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<AvgPerformance />}
          iconBgColor="#E6F2FD"
          iconSize={10}
          title="Avg. Performance"
          contentMagnitude={parseInt(avg_performance, 10)}
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Assessments />}
          iconBgColor="#FFF8EC"
          iconSize={10}
          title="Assessment"
          contentMagnitude={parseInt(assessment, 10)}
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Asignment />}
          iconBgColor="#FEECEB"
          iconSize={10}
          title="Assignment"
          contentMagnitude={parseInt(assignment, 10)}
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Coding />}
          iconBgColor="#EDFAEE"
          iconSize={10}
          title="Coding"
          contentMagnitude={parseInt(coding, 10)}
          contentType="percent"
          showCountingAnimation={true}
        />
      </Stack>
    </Box>
  )
}
export default DashBordCards
