import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export default function AddJob({ open, onClose }) {
    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={2}>
                <Typography variant='subtitle1' sx={{ color: 'primary.dark', fontWeight: 600 }}>Add Job</Typography>
                <IconButton onClick={onClose}><Close /></IconButton>
            </Stack>
            <Divider />
            <form>
                <Box p={2}>

                    <Stack>
                        <Typography>Job Title</Typography>
                        <TextField placeholder='Enter Job Title' />
                    </Stack>

                </Box>
                <Stack direction={'row'} justifyContent={"end"} p={2} spacing={2}>
                    <Button variant='outlined' sx={{ borderColor: '#777', color: '#777' }} onClick={onClose}>Cancel</Button>
                    <Button variant='outlined'>Submit</Button>
                </Stack>
            </form>
        </Dialog>
    )
}
