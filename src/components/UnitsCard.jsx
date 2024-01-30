import { Box, Stack, Typography } from '@mui/material'
import ArrowInCard from '../assets/ArrowInCard'
import OneCourses from '../assets/OneCourses'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const UnitsCard = (props) => {
  const navigate = useNavigate()
  const handelClickOnUnitCard = (url) => {
    navigate(`/pdfview/${encodeURIComponent(url)}`)
  }
  const { name, url } = { ...props }
  return (
    <Box
      sx={{
        minWidth: '120px',
        maxWidth: '285px',
      }}
    >
      <div onClick={() => handelClickOnUnitCard(url)}>
        <Stack
          direction={'row'}
          sx={{
            // height: '80px',
            minWidth: '120px',
            maxWidth: '285px',
            padding: '10px 27px 10px 10px',
            alignItems: 'center',
            gap: '15px',
            borderRadius: '10px',
            border: '1px solid #F4F6F8',
            background: '#FFF',
            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
          }}
        >
          <Stack
            alignItems={'center'}
            sx={{
              width: '30px',
              borderRadius: '5px',
              background: '#DFE3E8',
              padding: '15px',
              gap: '10px',
            }}
          >
            <OneCourses />
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography
              sx={{
                color: '#161C24',
                textLeading: 'both',
                textEdge: 'cap',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 'normal',
                minWidth: '120px',
                width: '100%',
                maxWidth: '285px',
                // height: '32px',
              }}
            >
              {name}
            </Typography>

            <ArrowInCard />
          </Stack>
        </Stack>
      </div>
    </Box>
  )
}
export default UnitsCard
