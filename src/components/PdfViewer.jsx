import React, { useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { useParams } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Plus from '../assets/Plus'
import ExpandPdf from '../assets/ExpandPdf'
import Minus from '../assets/Minus'
import Rotatepdf from '../assets/Rotatepdf'
import CommonLayout from './CommonLayout'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './authSlice'

const PdfViewer = () => {
  const handleGoBack = () => {
    window.history.back()
  }
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const { url } = useParams()
  const pdfUrl = decodeURIComponent(url)
  if (!isLoggedIn) {
    return <p>please login</p>
  }

  return (
    <CommonLayout>
      <Stack spacing={1}>
        <Stack
          direction={'row'}
          sx={{
            maxWidth: '1285px',
            padding: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '99px',
            maxHeight: '24px',
          }}
        >
          <Stack direction={'row'} spacing={2}>
            <ArrowBackIcon onClick={handleGoBack} />
            <Typography>File name</Typography>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Typography>pagination</Typography>
            <Stack
              direction={'row'}
              spacing={3}
              sx={{
                borderLeft: '1px solid #BDBDC7',
                borderRight: '1px solid #BDBDC7',
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Minus />
              <Typography>zoom value</Typography>
              <Plus />
            </Stack>
            <Stack direction={'row'} spacing={3}>
              <ExpandPdf />
              <Rotatepdf />
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
        <Box
          sx={{
            minWidth: '415.511px',
            height: '588px',
            flexShrink: 0,
          }}
        >
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={pdfUrl} />
          </Worker>
        </Box>
      </Stack>
    </CommonLayout>
  )
}

export default PdfViewer
