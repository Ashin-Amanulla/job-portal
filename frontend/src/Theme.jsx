import React from 'react'
import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      background: {
        default: '#fff' // Your desired background color
      },
      primary: {
        main: '#119856', // Example primary color
        dark:'#0c4026',
        darkest: '#044022',
        background: '#f8f9fa'
      },
      secondary: {
        main: green[500], // Example secondary color
      },
      white:{
        main:'#fff'
      }
    },
    typography: {
      fontFamily: [
        'Poppins', // Your desired font family
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    },
    components: {
      // Name of the component ⚛️
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
          },
        },
      },
    },
  });

  export default theme;