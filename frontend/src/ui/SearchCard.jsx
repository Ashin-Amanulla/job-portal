import React from 'react'
import { Box, Typography, TextField, Button, InputAdornment, Paper, Stack, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function SearchCard() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Paper elevation={0} sx={{ p: { xs: 1, md: 3 }, borderRadius: '8px', width: '100%' }}>
      <Typography variant="h5" fontWeight={600} sx={{ fontSize: { xs: '22px', md: '40px' } }} color={"primary.darkest"} gutterBottom>
        Find your Dream job here!
      </Typography>
      <Typography variant="subtitle1" color={'#666'} gutterBottom>
        Explore our newest job opportunities to discover and apply for the top positions available today!
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} >
        {
          matches ?
            <Stack direction={'row'} sx={{ border: '1px solid #ccc', borderRadius: '8px', flexGrow: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Search Job title or Company here"
                fullWidth
                sx={{
                  "& fieldset": { border: 'none', borderRight: '1px solid #ccc' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Search Country or City here"
                fullWidth
                sx={{
                  "& fieldset": { border: 'none', borderRight: '1px solid #ccc' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack> :

            <Stack direction={'row'} sx={{ border: '1px solid #ccc', borderRadius: '8px', flexGrow: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Search Job title or Company here"
                fullWidth
                sx={{
                  "& fieldset": { border: 'none', borderRight: '1px solid #ccc' },

                }}
                InputProps={{
                  style: { fontSize: '10px', height: 40 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Search Country or City here"
                fullWidth
                sx={{
                  "& fieldset": { border: 'none', borderRight: '1px solid #ccc' },
                }}
                InputProps={{
                  style: { fontSize: '10px', height: 40 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon color="action" />
                    </InputAdornment>
                  )
                }}
              />
            </Stack>
        }
        <Button variant="contained" color="primary" sx={{ borderRadius: '8px', py: 1, px: 5 }}>
          Search
        </Button>
      </Stack>
    </Paper>
  )
}
