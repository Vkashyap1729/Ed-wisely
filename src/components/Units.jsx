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

const Units = () => {
  const unitName = 'Euler and Hamilton Paths'
  const [expanded, setExpanded] = useState(false)

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

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
          {[1, 2, 3, 4, 5].map((unit) => (
            <Typography
              key={unit}
              sx={{
                color: '#919EAB',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 'normal',
                position: 'relative',
                alignItems: 'center',
                '&:hover': {
                  color: '#0946C4',
                  fontWeight: 600,
                  transition:
                    'color 0.3s ease-in-out, font-weight 0.3s ease-in-out',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '0',
                    width: '55.5px',
                    height: '3px',
                    background: '#0946C4',
                  },
                },
                cursor: 'pointer',
              }}
            >
              <Box height="24px">{`Unit ${unit}`}</Box>
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
            <Typography>{unitName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Euler and Hamilton Paths</Typography>
            <Typography>Euler and Hamilton Paths</Typography>
            <Typography>Euler and Hamilton Paths</Typography>
            <Typography>Euler and Hamilton Paths</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Units
