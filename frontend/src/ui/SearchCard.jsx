import React from 'react'
import { Box, Typography, TextField, Button, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function SearchCard() {
  return (
    <div> <Paper elevation={1} sx={{ p: 3, borderRadius: '8px', maxWidth: 800, margin: 'auto' }}>
    <Typography variant="h5" fontWeight="bold" gutterBottom>
      Find your Dream job here!
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Explore our newest job opportunities to discover and apply for the top positions available today!
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Search Job title or Company here"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        placeholder="Search Country or City here"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" sx={{ borderRadius: '20px', px: 4 }}>
        Search
      </Button>
    </Box>
  </Paper></div>
  )
}
