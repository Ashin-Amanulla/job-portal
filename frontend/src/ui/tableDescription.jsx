import { Box, Button, Dialog, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function TableDescription({ text }) {
    const [open, setOpen] = useState(false)
    return (
        <Stack>
            <Typography variant='body2' noWrap>{text.substring(0, 15)}.....</Typography>
            <Button variant='text' sx={{fontSize:'12px',textTransform:'none',p:0.1,justifyContent:'left',width:70}} onClick={() => setOpen(true)}>Show more</Button>
            <Dialog maxWidth={'sm'} open={open} onClose={() => setOpen(false)}>
                <Box p={2}>
                <Typography variant='subtitle2'>{text}</Typography>
                </Box>
            </Dialog>
        </Stack>
    )
}
