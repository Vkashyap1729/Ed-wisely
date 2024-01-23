import * as React from 'react'
import {
  ChartContainer,
  BarPlot,
  ChartsXAxis,
  ChartsYAxis,
} from '@mui/x-charts'
import { Typography } from '@mui/material'
const analysisData = [
  {
    name: 'T1',
    test_id: 1,
    percentage: 38,
    attempted: 1,
  },
  {
    name: 'T2',
    test_id: 2,
    percentage: 55,
    attempted: 1,
  },
  {
    name: 'T3',
    test_id: 3,
    percentage: 0,
    attempted: 0,
  },
  {
    name: 'T4',
    test_id: 4,
    percentage: 73,
    attempted: 1,
  },
  {
    name: 'T5',
    test_id: 5,
    percentage: 61,
    attempted: 1,
  },
  {
    name: 'T6',
    test_id: 6,
    percentage: 0,
    attempted: 0,
  },
  {
    name: 'T7',
    test_id: 7,
    percentage: 94,
    attempted: 1,
  },
  {
    name: 'T8',
    test_id: 8,
    percentage: 29,
    attempted: 1,
  },
  {
    name: 'T9',
    test_id: 9,
    percentage: 59,
    attempted: 1,
  },
  {
    name: 'T10',
    test_id: 10,
    percentage: 0,
    attempted: 0,
  },
  {
    name: 'T11',
    test_id: 11,
    percentage: 81,
    attempted: 1,
  },
  {
    name: 'T12',
    test_id: 12,
    percentage: 67,
    attempted: 1,
  },
]

const uData = analysisData.map((item) => item.percentage)
const xLabels = analysisData.map((item) => item.name)
const color = '#0B58F5'

export default function TinyBarChart() {
  return (
    <>
      <Typography>Avg. performance</Typography>
      <ChartContainer
        width={500}
        height={300}
        series={[{ data: uData, label: 'uv', type: 'bar', color: color }]}
        xAxis={[{ scaleType: 'band', data: xLabels }]}
      >
        <BarPlot />
        {/* X Axis Label */}
        <ChartsXAxis label="Tests" position="bottom" />
      </ChartContainer>
    </>
  )
}
