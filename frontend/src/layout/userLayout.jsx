import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

export default function UserLayout() {
  return (
    <Box sx={{ backgroundColor: 'primary.background' }}>
      <Navbar />
      <Outlet />
    </Box>
  )
}
