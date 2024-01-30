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
