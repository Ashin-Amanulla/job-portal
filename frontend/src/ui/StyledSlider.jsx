import { Slider, styled } from '@mui/material';
import React from 'react'


const StyledSlider = styled(Slider)(({ theme }) => ({
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: 45,
      backgroundColor: 'unset',
      color: "#999",
      '&::before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
      height: 5,
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      boxShadow: 'inset 0px 0px 4px -2px #000',
      backgroundColor: '#d0d0d0',
    },
  }));

export default StyledSlider;
