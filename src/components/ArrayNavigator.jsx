import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ArrayNavigator = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
  const [currentIndex, setCurrentIndex] = useState(0)

  const goBack = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goForward = () => {
    setCurrentIndex((prevIndex) => Math.min(data.length - 1, prevIndex + 1))
  }

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={goBack} disabled={currentIndex === 0}>
        <ArrowBackIcon />
      </Button>
      <Box flexGrow={1} textAlign="center">
        {data[currentIndex]}
      </Box>
      <Button onClick={goForward} disabled={currentIndex === data.length - 1}>
        <ArrowForwardIcon />
      </Button>
    </Box>
  )
}

export default ArrayNavigator
