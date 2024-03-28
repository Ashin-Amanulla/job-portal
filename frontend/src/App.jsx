import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import FindJobs from "./pages/FindJobs";
import CreateJobs from "./pages/CreateJobs";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import theme from "./Theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AdminLayout from "./layout/adminLayout";
import RouteRenderer from "./core/routes/routeRender";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteRenderer />
    </ThemeProvider>
  );
}
