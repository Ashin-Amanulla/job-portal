import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { jobs } from '../assets/json/jobs'
import StyledTableActionCell from '../ui/tableAction'
import AddUser from '../components/admin/users/addusers'
import StyledTable from '../ui/styledTable'
import { USERS } from '../assets/json/users'
import { getUsers } from '../services/admin'
import { tableHeaderReplace } from '../util/tableHeaderReplace'

const HEADER = [
    "Name",
    "Email",
    "Mobile",
    "JNV",
    "Batch",
    "Created On"
]

export default function Users() {
    const [open,setOpen] = useState(false)
    
    const [data,setData] = useState([])

    useEffect(() => {
      init()
    }, [])

    const init = ()=>{
        getUsers().then((res)=>{
            console.log(res);
            if (res.status) {
                setData(tableHeaderReplace(res.result,['name',"email","contact","jnv","batch","createdAt"],HEADER))
            }
        })
    }

    return (
        <Box p={2} >
            <AddUser open={open} onClose={()=>setOpen(false)} onSubmitted={init} />
            <Stack direction={"row"} sx={{ justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#fff', borderRadius: '8px', mb: 2 }}>
                <Typography variant='h6'>Jobs</Typography>
                <Button variant='contained' onClick={()=>setOpen(true)}>Add User</Button>
            </Stack>
            <StyledTable header={HEADER} data={data} onActionClick={(e)=>console.log(e)} />
        </Box>
    )
}
