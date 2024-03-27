import React from "react";
import JobCard from "../ui/JobCard";
import Filter from "../ui/Filter";
import SearchCard from "../ui/SearchCard";
import { Grid, Container, Paper, Box } from "@mui/material";
import Jobs from "../components/jobs";

export default function Home() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper elevation={0}>
            <Filter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container >
            <Grid item xs={12} >
              <SearchCard />
            </Grid>
            <Grid item xs={12} md={12}>
              <Jobs />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
