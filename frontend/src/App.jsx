import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FindJobs from "./pages/FindJobs";
import CreateJobs from "./pages/CreateJobs";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import theme from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


export default function App() {
  return (
    <div>
       <ThemeProvider theme={theme}>
       <CssBaseline /> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/find-jobs" element={<FindJobs />}></Route>
        <Route path="/create-jobs" element={<CreateJobs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      </ThemeProvider>
    </div>
  );
}
