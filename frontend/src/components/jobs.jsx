import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import JobCard from '../ui/JobCard'
import { jobs } from '../assets/json/jobs'
import { FilterList } from '@mui/icons-material'

export default function Jobs({ data, filterChange }) {
    return (
        <Box>
            <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'start', md: 'center' }} justifyContent={"space-between"}
                sx={{ backgroundColor: 'primary.background', p: 1 }}>
                <Stack direction={'row'} spacing={1} justifyContent={"space-between"} alignItems={"center"}>
                    <Stack  direction={'row'} spacing={1} flexGrow={1}>
                        <Typography variant='h6' color={'#444'} fontWeight={500} sx={{ fontSize: { xs: '16px', md: '20px' } }}>Showing</Typography>
                        <Typography variant='h6' color={'primary'} fontWeight={500} sx={{ fontSize: { xs: '16px', md: '20px' } }}>1382</Typography>
                        <Typography variant='h6' color={'#444'} fontWeight={500} sx={{ fontSize: { xs: '16px', md: '20px' } }}>available jobs</Typography>
                    </Stack>
                    <IconButton onClick={filterChange} sx={{display:{xs:'block',md:'none'}}}>
                        <FilterList />
                    </IconButton>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={"center"}>
                    <Typography color={'#666'}>Sort By:</Typography>
                    <Box sx={{ backgroundColor: '#fff', borderRadius: '4px', p: 1 }}>
                        <Typography variant='subtitle2' color={'primary.darkest'}>Newest</Typography>
                    </Box>

                </Stack>
            </Stack>
            <Grid container spacing={3} mt={1} sx={{ px: 1, overflow: 'scroll' }} maxHeight={{ xs: '55vh', md: '60vh' }}>
                {jobs.map((data, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <Paper elevation={0}><JobCard data={data} /></Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
