import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import FindJobs from "./pages/FindJobs";
import CreateJobs from "./pages/CreateJobs";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import theme from "./Theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{backgroundColor:'primary.background'}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/find-jobs" element={<FindJobs />}></Route>
          <Route path="/create-jobs" element={<CreateJobs />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
