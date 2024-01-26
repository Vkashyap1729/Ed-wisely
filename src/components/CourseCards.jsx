import { Box, Typography } from '@mui/material'
import { AspectRatio } from '@mui/icons-material'
const CourseCards = ({
  chipname = 'design',
  name = 'Machine Learning A-Z™: Hands-On Python & R In Data..',
  color = '#0B58F5',
  bgcolor = '#E7EEFE',
  imgUrl = 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/course+images/Course+Images+4.jpg',
}) => {
  return (
    <Box sx={{ maxWidth: '244px', width: '100%', minWidth: '100px' }}>
      <Box
        sx={{
          borderRadius: '10px 10px 0px 0px',
          background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
          boxShadow: '0px -1px 0px 0px #E9EAF0 inset',
          width: '100%',
          aspectRatio: '244/183',
        }}
      ></Box>
      <Box sx={{ padding: '0px 14px' }}>
        <Box
          sx={{
            display: 'inline-flex',
            padding: '4px 6px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: bgcolor,
            my: '10px',
          }}
        >
          <Typography
            sx={{
              color: color,
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '12px',
              textTransform: 'uppercase',
            }}
          >
            {chipname}
          </Typography>
        </Box>
        <Typography>{name}</Typography>
      </Box>
    </Box>
  )
}

export default CourseCards
