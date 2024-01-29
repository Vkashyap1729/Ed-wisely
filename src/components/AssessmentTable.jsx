import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ArrayNavigator from './ArrayNavigator'
const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Doe', age: 22 },
]

const headers = [
  { label: 'ID', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
]
const semester = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
const AssessmentTable = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goBack = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goForward = () => {
    setCurrentIndex((prevIndex) => Math.min(semester.length - 1, prevIndex + 1))
  }
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' })
  const [ageFilter, setAgeFilter] = useState('semester')

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const handleAgeFilterChange = (event) => {
    setAgeFilter(event.target.value)
  }

  const getClassNamesFor = (name) => {
    if (!sortConfig.key) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const getArrowIcon = (name) => {
    if (!sortConfig.key || sortConfig.key !== name) {
      return null
    }

    return sortConfig.direction === 'asc' ? (
      <ArrowDropUpIcon />
    ) : (
      <ArrowDropDownIcon />
    )
  }

  const filteredData = data.filter((row) => {
    return row.age.toString().includes(ageFilter)
  })

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
    }
    if (sortConfig.direction === 'desc') {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1
    }
    return 0
  })

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Button onClick={goBack} disabled={currentIndex === 0}>
          <ArrowBackIcon />
        </Button>
        <Box flexGrow={1} textAlign="center">
          {semester[currentIndex]}
        </Box>
        <Button onClick={goForward} disabled={currentIndex === data.length - 1}>
          <ArrowForwardIcon />
        </Button>
      </Box>
      <TextField
        label="Filter by Age"
        variant="outlined"
        value={ageFilter}
        onChange={handleAgeFilterChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header.key}
                  onClick={() => requestSort(header.key)}
                  className={getClassNamesFor(header.key)}
                >
                  {header.label} {getArrowIcon(header.key)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ArrayNavigator />
    </div>
  )
}

export default AssessmentTable
