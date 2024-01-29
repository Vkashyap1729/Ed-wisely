import React from 'react'
import {
  Box,
  Stack,
  Typography,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import Search from '../assets/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Fade from '@mui/material/Fade'
import { useState } from 'react'
// import ArticleIcon from '@mui/icons-material/Article'
import FeedIcon from '@mui/icons-material/Feed'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
const Units = (props) => {
  // const units = [
  //   {
  //     unit_id: 9900,
  //     unit_name: 'Unit I',
  //     topics: [
  //       {
  //         topic_id: 1101,
  //         topic_name: 'Introduction to UI/UX Design',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1102,
  //         topic_name: 'Principles of Visual Design',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1103,
  //         topic_name: 'Historical Perspectives in Machine Learning',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1104,
  //         topic_name: 'Key Concepts in ML',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1105,
  //         topic_name: 'Human-Computer Interaction (HCI) Basics',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //     ],
  //   },
  //   {
  //     unit_id: 9910,
  //     unit_name: 'Unit II',
  //     topics: [
  //       {
  //         topic_id: 1010,
  //         topic_name: 'Linear Algebra for ML',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1011,
  //         topic_name: 'Design Thinking Process',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1013,
  //         topic_name: 'Probability and Statistics in ML',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1015,
  //         topic_name: 'Creating User Personas',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1018,
  //         topic_name: 'Wireframing and Prototyping',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //     ],
  //   },
  //   {
  //     unit_id: 9920,
  //     unit_name: 'Unit III',
  //     topics: [
  //       {
  //         topic_id: 1020,
  //         topic_name: 'Typography and Font Selection',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1021,
  //         topic_name: 'Handling Missing Data',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1023,
  //         topic_name: 'Visual Hierarchy and Interaction Design',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1025,
  //         topic_name: 'Data Normalization and Standardization',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1028,
  //         topic_name: 'Responsive Design Principles',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //     ],
  //   },
  //   {
  //     unit_id: 9930,
  //     unit_name: 'Unit IV',
  //     topics: [
  //       {
  //         topic_id: 1030,
  //         topic_name: 'Microinteractions in UI',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1031,
  //         topic_name: 'Cross-Validation Techniques',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1033,
  //         topic_name: 'Navigation Design',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1035,
  //         topic_name: 'Comparing ML Models and Algorithms',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1038,
  //         topic_name: 'Usability Testing Techniques',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //     ],
  //   },
  //   {
  //     unit_id: 9940,
  //     unit_name: 'Unit V',
  //     topics: [
  //       {
  //         topic_id: 1040,
  //         topic_name: 'Introduction to Supervised Learning',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1041,
  //         topic_name: 'Career Paths and Future Trends in UI/UX Design',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1043,
  //         topic_name: 'Regression Algorithms',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //       {
  //         topic_id: 1045,
  //         topic_name: 'Emerging Technologies in UX',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/waves_quantum.pdf',
  //       },
  //       {
  //         topic_id: 1048,
  //         topic_name: 'Design Systems and Style Guides',
  //         url: 'https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf',
  //       },
  //     ],
  //   },
  // ]
  const { units } = { ...props }
  console.log('units are', units)
  const [idx, setIdx] = useState(0)
  const [clickedIndex, setClickedIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const activeStyles = {
    color: '#0946C4',
    fontWeight: 600,
    transition: 'color 0.3s ease-in-out, font-weight 0.3s ease-in-out',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '55.5px',
      height: '3px',
      background: '#0946C4',
    },
  }
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }
  const handleTypographyClick = (index) => {
    setClickedIndex(index)
  }

  console.log(units[0].topics)
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          // border: '2px solid black',
        }}
        my={2}
      >
        <Stack
          display={'flex'}
          direction="row"
          spacing={4}
          alignItems="center"
          position="relative"
        >
          {units.map((unit, index) => (
            <Typography
              onClick={() => setIdx(index)}
              key={unit.unit_id}
              sx={{
                color: clickedIndex === index ? '#0946C4' : '#919EAB',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: clickedIndex === index ? 600 : 300,
                lineHeight: 'normal',
                position: 'relative',
                alignItems: 'center',
                cursor: 'pointer',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: '0',
                  width: clickedIndex === index ? '55.5px' : '0',
                  height: '3px',
                  background: '#0946C4',
                  color: '#0946C4',
                  transition: 'width 0.1s ease-in-out',
                },
              }}
            >
              <Box
                height="24px"
                onClick={() => handleTypographyClick(index)}
              >{`${unit.unit_name}`}</Box>
            </Typography>
          ))}

          <InputBase
            placeholder="Search topics"
            startAdornment={<Search />}
            sx={{
              borderRadius: '6.64px',
              border: '1px solid #F4F6F8',
              background: '#F4F6F8',
              display: 'flex',
              height: '35px',
              width: '144px',
              padding: '7.589px 9.486px',
              alignItems: 'center',
              gap: '11.383px',
              flexShrink: 0,
            }}
          />
        </Stack>
      </Box>
      <Box>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          sx={{
            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': {
              display: expanded ? 'block' : 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>{units[idx].topics[0].topic_name}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ marginLeft: '26px' }}>
            {units[idx].topics.map((topic) => (
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                spacing={'150px'}
                my={'14px'}
              >
                <Stack direction={'row'} spacing={'10px'}>
                  <FeedIcon />
                  <Typography key={topic.topic_id}>
                    {topic.topic_name}
                  </Typography>
                </Stack>
                <Stack alignItems={'center'} direction={'row'} spacing={'10px'}>
                  <Typography
                    sx={{
                      color: '#0B58F5',
                      leadingTrim: 'both',
                      textEdge: 'cap',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}
                  >
                    Start
                  </Typography>
                  <Typography
                    sx={{
                      color: '#0B58F5',
                      leadingTrim: 'both',
                      textEdge: 'cap',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}
                  >
                    <ArrowForwardIcon fontSize="small" />
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Units
