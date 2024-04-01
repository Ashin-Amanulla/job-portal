import React from "react";
import theme from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import RouteRenderer from "./core/routes/routeRender";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouteRenderer />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
