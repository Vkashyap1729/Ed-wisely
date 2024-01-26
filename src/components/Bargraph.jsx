import * as React from 'react'
import {
  Typography,
  Stack,
  Box,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from '@mui/material'
import Red from '../assets/Red'
import Blue from '../assets/Blue'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const CustomizedLabel = ({ x, y, value }) => (
  <text x={x} y={y} dy={-10} fill="red" textAnchor="middle">
    {value}
  </text>
)
const data = [
  {
    name: 'T1',
    value: 38,
  },
  {
    name: 'T2',
    value: 55,
  },
  {
    name: 'T3',
    value: 0,
  },
  {
    name: 'T4',
    value: 73,
  },
  {
    name: 'T5',
    value: 61,
  },
  {
    name: 'T6',
    value: 0,
  },
  {
    name: 'T7',
    value: 94,
  },
  {
    name: 'T8',
    value: 29,
  },
  {
    name: 'T9',
    value: 59,
  },
  {
    name: 'T10',
    value: 0,
  },
  {
    name: 'T11',
    value: 81,
  },
  {
    name: 'T12',
    value: 67,
  },
]

export default function TinyBarChart() {
  const [expanded, setExpanded] = useState(false)

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }
  return (
    <Box
      sx={{
        width: '67vw',
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography>Recent Assessments</Typography>
        <Stack direction={'row'} spacing={'18px'}>
          <Stack direction={'row'} spacing={'5px'}>
            <Box>
              <Red />
            </Box>
            <Typography>Attempted</Typography>
          </Stack>
          <Stack direction={'row'} spacing={'5px'}>
            <Box>
              <Blue />
            </Box>
            <Typography>Unattempted</Typography>
          </Stack>
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
              <Typography>Subjects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Euler and Hamilton Paths</Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
      <Typography>Avg. performance</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0B58F5" label={<CustomizedLabel />} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
