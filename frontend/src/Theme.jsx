import React from 'react'
import { createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      background: {
        default: '#f5f5f5' // Your desired background color
      },
      primary: {
        main: purple[500], // Example primary color
      },
      secondary: {
        main: green[500], // Example secondary color
      },
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