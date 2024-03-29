import React from "react";
import theme from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import RouteRenderer from "./core/routes/routeRender";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteRenderer />
    </ThemeProvider>
  );
}
