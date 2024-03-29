import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { jobs } from '../assets/json/jobs'
import AddJob from '../components/admin/jobs/addJob'

export default function Jobs() {
    const [open,setOpen] = useState(false)
    return (
        <Box p={2} >
            <AddJob open={open} onClose={()=>setOpen(false)}/>
            <Stack direction={"row"} sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#fff', borderRadius: '8px', mb: 2 }}>
                <Typography variant='h6'>Jobs</Typography>
                <Button variant='contained' onClick={()=>setOpen(true)}>Add Job</Button>
            </Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                                <TableCell align="right">{row.salary}k/m</TableCell>
                                <TableCell align="right">{row.salary}k/m</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
