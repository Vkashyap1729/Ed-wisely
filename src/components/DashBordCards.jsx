import { Typography, Box, Stack } from '@mui/material'
import AssessmentDetailCard from './AssessmentDetailCard'
import Asignment from '../assets/Asignment'
const DashBordCards = () => {
  return (
    <Box marginTop={1}>
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
          icon={<Asignment />}
          iconBgColor="#EDFAEE"
          iconSize={10}
          title="Coding"
          contentMagnitude="25"
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Asignment />}
          iconBgColor="#EDFAEE"
          iconSize={10}
          title="Coding"
          contentMagnitude="25"
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Asignment />}
          iconBgColor="#EDFAEE"
          iconSize={10}
          title="Coding"
          contentMagnitude="25"
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Asignment />}
          iconBgColor="#EDFAEE"
          iconSize={10}
          title="Coding"
          contentMagnitude="25"
          contentType="percent"
          showCountingAnimation={true}
        />
        <AssessmentDetailCard
          icon={<Asignment />}
          iconBgColor="#EDFAEE"
          iconSize={10}
          title="Coding"
          contentMagnitude="25"
          contentType="percent"
          showCountingAnimation={true}
        />
      </Stack>
    </Box>
  )
}
export default DashBordCards
