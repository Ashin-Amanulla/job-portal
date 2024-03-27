import { Checkbox } from '@mui/material'
import React from 'react'

export default function StyledCheckBox({props}) {
  return (
    <Checkbox sx={{color:'#bbb'}} {...props}/>
  )
}
