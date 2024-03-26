import React from "react";
import JobCard from "../ui/JobCard";
import Filter from "../ui/Filter";
import SearchCard from "../ui/SearchCard";
import { Grid, Container, Paper } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{padding:2}}>
      <Grid container spacing={2}>
      
        <Grid item xs={12} md={4}>
        <Paper elevation={3}>   <Filter /></Paper>
        </Grid>
        <Grid item xs={12} md={8} container spacing={2}>
        <Grid item xs={12}>
        <Paper elevation={3}><SearchCard /></Paper>
        </Grid>
          {/* Assuming you want to render multiple JobCards, you might map through an array */}
          {[...Array(10)].map((_, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
            <Paper elevation={3}><JobCard /></Paper>   
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
