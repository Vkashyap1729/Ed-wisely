import { Box, Typography } from '@mui/material'

const CourseCards = ({
  chipname = 'design',
  name = 'Machine Learning A-Z™: Hands-On Python & R In Data..',
  color = '#0B58F5',
  bgcolor = '#E7EEFE',
  width = '44px',
  imgUrl = 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/course+images/Course+Images+4.jpg',
}) => {
  const cardStyles = {
    borderRadius: '10px 10px 0px 0px',
    background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
    boxShadow: '0px -1px 0px 0px #E9EAF0 inset',
    height: '153px',
  }

  const chipStyles = {
    display: 'flex',
    padding: '4px 6px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    height: '12px',
    width: width,
  }

  return (
    <Box width="244px">
      <Box sx={cardStyles}></Box>
      <Box my="14px" mx="14px">
        <Box sx={chipStyles}>
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
        </Box>
        <Typography
          width="216px"
          marginTop="14px"
          sx={{
            color: '#161C24',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.14px',
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  )
}

export default CourseCards
