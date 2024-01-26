import React, { useState, useEffect } from 'react'
import {
  Box,
  Stack,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Checkbox,
  Select,
  MenuItem,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'
import useFetchData from '../CustomHooks'

const headCells = [
  { id: 'subject', numeric: false, disablePadding: true, label: 'Subject' },
  {
    id: 'total_timespent',
    numeric: true,
    disablePadding: false,
    label: 'Time Spent',
  },
  {
    id: 'submission_type',
    numeric: true,
    disablePadding: false,
    label: 'Submission Type',
  },
  {
    id: 'internet_speed',
    numeric: true,
    disablePadding: false,
    label: 'Internet Speed',
  },
  { id: 'rank', numeric: true, disablePadding: false, label: 'Rank' },
  {
    id: 'percentage_scored',
    numeric: true,
    disablePadding: false,
    label: 'Marks',
  },
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span style={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

function createData(
  subject,
  total_timespent,
  submission_type,
  internet_speed,
  rank,
  percentage_scored
) {
  return {
    subject,
    total_timespent,
    submission_type,
    internet_speed,
    rank,
    percentage_scored,
  }
}

const Assessments = () => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('subject')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selectedSemester, setSelectedSemester] = useState(null)

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        'https://stagingstudentpython.edwisely.com/reactProject/assessments'
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }

  const {
    data: assessments,
    error,
    isLoading,
    setData: setAssessmentsData,
  } = useFetchData(fetchDataFromApi)

  useEffect(() => {
    if (isLoading) {
      return // Early return if loading
    }

    if (error) {
      return // Early return if error
    }

    // Ensure assessments is not undefined before accessing its length
    const totalAssessments = assessments || []

    // Initial sorting
    const sortedAssessments = [...totalAssessments].sort(
      (a, b) => b.percentage_scored - a.percentage_scored
    )
    setAssessmentsData(sortedAssessments)
  }, [assessments, error, isLoading, setAssessmentsData])
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    setSelected((prevSelected) => {
      if (event.target.checked) {
        return assessments.map((n) => n.subject)
      }
      return []
    })
  }

  const handleClick = (event, subject) => {
    setSelected((prevSelected) => {
      const selectedIndex = prevSelected.indexOf(subject)
      let newSelected = []

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(prevSelected, subject)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(prevSelected.slice(1))
      } else if (selectedIndex === prevSelected.length - 1) {
        newSelected = newSelected.concat(prevSelected.slice(0, -1))
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          prevSelected.slice(0, selectedIndex),
          prevSelected.slice(selectedIndex + 1)
        )
      }

      return newSelected
    })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleDelete = () => {
    // Assuming you have a function to delete the selected assessments
    // deleteAssessments(selected);
    // After deletion, you might want to refetch the data or update the state accordingly
    // Refetch data or update state...
    setSelected([])
  }

  const isSelected = (subject) => selected.indexOf(subject) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, assessments.length - page * rowsPerPage)

  const filteredAssessments = selectedSemester
    ? assessments.filter(
        (assessment) => assessment.semester === selectedSemester
      )
    : assessments

  const sortedAssessments = stableSort(
    filteredAssessments,
    getComparator(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Box>
      <Paper>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h6" id="tableTitle" component="div">
              Assessments
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <FilterListIcon />
              <Select
                value={selectedSemester || 'all'}
                onChange={(e) =>
                  setSelectedSemester(
                    e.target.value === 'all' ? null : e.target.value
                  )
                }
              >
                <MenuItem value="all">All Semesters</MenuItem>
                {/* Add other semester options dynamically based on your data */}
                {/* <MenuItem value="semester1">Semester 1</MenuItem>
                <MenuItem value="semester2">Semester 2</MenuItem> */}
              </Select>
              <DeleteIcon onClick={handleDelete} />
            </Stack>
          </Stack>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedAssessments.map((assessment) => {
                const isItemSelected = isSelected(assessment.subject)
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={assessment.subject}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onClick={(event) =>
                          handleClick(event, assessment.subject)
                        }
                      />
                    </TableCell>
                    <TableCell align="left">{assessment.subject}</TableCell>
                    <TableCell align="right">
                      {assessment.total_timespent}
                    </TableCell>
                    <TableCell align="right">
                      {assessment.submission_type}
                    </TableCell>
                    <TableCell align="right">
                      {assessment.internet_speed}
                    </TableCell>
                    <TableCell align="right">{assessment.rank}</TableCell>
                    <TableCell align="right">
                      {assessment.percentage_scored}
                    </TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={assessments ? assessments.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export default Assessments
