import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { jobs } from '../assets/json/jobs'
import AddJob from '../components/admin/jobs/addJob'
import StyledTableActionCell from '../ui/tableAction'
import StyledTable from '../ui/styledTable'
import { tableHeaderReplace } from '../util/tableHeaderReplace'

const HEADER = [
    "icon",
    "Title",
    "Company",
    "Description",
    "Address",
    "Salary(k/m)",
    "Job Opening",
    "Job Closing",
    "Experience",
    "Requirements",
    "Apply on",
    
]

export default function Jobs() {
    const [open, setOpen] = useState(false)
    return (
        <Box p={2} >
            <AddJob open={open} onClose={() => setOpen(false)} />
            <Stack direction={"row"} sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#fff', borderRadius: '8px', mb: 2 }}>
                <Typography variant='h6'>Jobs</Typography>
                <Button variant='contained' onClick={() => setOpen(true)}>Add Job</Button>
            </Stack>
            <StyledTable header={HEADER} data={tableHeaderReplace(jobs, 
                ["companyLogo", "title", "company", "jobDescribe","Address", "salary","JobOpening","JobClosing","Experience","Requirements","applyon"], HEADER)} />
        </Box>
    )
}
