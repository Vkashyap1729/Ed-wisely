import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const Testing = () => {
const data = 
  const [filteredData, setFilteredData] = useState(data)

  const columns = [
    { field: 'subject', headerName: 'Subject', flex: 1, sortable: true },
    { field: 'semester', headerName: 'Semester', flex: 1, sortable: true },
    {
      field: 'total_timespent',
      headerName: 'Total Time Spent',
      flex: 1,
      sortable: true,
    },
    {
      field: 'submission_type',
      headerName: 'Submission Type',
      flex: 1,
      sortable: true,
    },
    {
      field: 'internet_speed',
      headerName: 'Internet Speed',
      flex: 1,
      sortable: true,
    },
    {
      field: 'percentage_scored',
      headerName: 'Percentage Scored',
      flex: 1,
      sortable: true,
    },
    { field: 'attempted', headerName: 'Attempted', flex: 1, sortable: true },
  ]

  const handleSortModelChange = (model) => {
    // Handle sorting logic here
    // You can use the model to sort the data
    // Example: setFilteredData(sortedData);
  }

  const handleFilterChange = (event) => {
    const semesterFilter = event.target.value
    // Handle filtering logic here
    // Example: const filteredData = data.filter(item => item.semester === parseInt(semesterFilter, 10));
    // setFilteredData(filteredData);
  }

  return (
    <div>
      <label>Filter by Semester: </label>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
        <option value="3">Semester 3</option>
      </select>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          sortModel={[
            { field: 'semester', sort: 'asc' }, // Default sorting by semester in ascending order
          ]}
          onSortModelChange={handleSortModelChange}
        />
      </div>
    </div>
  )
}

export default Testing
