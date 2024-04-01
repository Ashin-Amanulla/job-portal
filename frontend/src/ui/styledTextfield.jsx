import { TextField } from '@mui/material'
import React from 'react'

export default function StyledTextfield({placeholder,...props}) {
  return (
    <TextField placeholder={placeholder}  InputProps={{style:{height:'40px',width:'100%'}}} {...props} />
  )
}
