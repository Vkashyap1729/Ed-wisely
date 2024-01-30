import * as React from 'react'
import {
  Typography,
  Stack,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import Red from '../assets/Red'
import Blue from '../assets/Blue'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts'

const CustomizedLabel = ({ x, y, value }) => {
  const col = value === 0 ? '#F44336' : '#0B58F5'
  const fontSize = 14
  const barWidth = 60
  const textWidth = value.toString().length * fontSize

  return (
    <Typography
      component="text"
      x={x + (barWidth - textWidth) / 2}
      y={y}
      dy={-10}
      fill={col}
      textAnchor="middle"
      sx={{
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        letterSpacing: '0.5px',
      }}
    >
      {value}%
    </Typography>
  )
}

export default function Bargraph(analysis) {
  const obj = { ...analysis }
  // console.log('bar graph ', obj.analysis)
  const data = obj.analysis
  const [subject, setSubject] = React.useState('')

  const handleChange = (event) => {
    setSubject(event.target.value)
  }
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography
          sx={{
            color: '#161C24',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px',
          }}
        >
          Recent Assessments
        </Typography>
        <Stack direction={'row'} spacing={'18px'} alignItems={'center'}>
          <Stack direction={'row'} spacing={'5px'}>
            <Box>
              <Red />
            </Box>
            <Typography
              sx={{
                color: '#161C24',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Attempted
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={'5px'}>
            <Box>
              <Blue />
            </Box>
            <Typography
              sx={{
                color: '#161C24',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
              }}
            >
              Unattempted
            </Typography>
          </Stack>
          <FormControl fullWidth sx={{ width: '150px' }}>
            <InputLabel id="demo-simple-select-label">Subjects</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subject}
              label="Subjects"
              onChange={handleChange}
            >
              <MenuItem value={1}>Subject 01</MenuItem>
              <MenuItem value={2}>Subject 02</MenuItem>
              <MenuItem value={3}>Subject 03</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Typography
        sx={{
          color: '#637381',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px',
        }}
      >
        Avg. performance
      </Typography>
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="name"
            sx={{
              color: '#637381',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '20px',
            }}
          />
          <Bar
            dataKey="percentage"
            fill="#0B58F5"
            // label={<CustomizedLabel />}
            label={<CustomizedLabel />}
            barSize={30}
          />
        </BarChart>
        <Typography
          sx={{
            color: '#637381',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            margin: '0 50% 0 50%',
          }}
        >
          Tests
        </Typography>
      </ResponsiveContainer>
    </>
  )
}
