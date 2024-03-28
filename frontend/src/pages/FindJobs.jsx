import React, { useState } from "react";
import JobCard from "../ui/JobCard";
import Filter from "../ui/Filter";
import SearchCard from "../ui/SearchCard";
import { Grid, Container, Paper, Box, Drawer } from "@mui/material";
import Jobs from "../components/jobs";

export default function FindJobs() {
  const [filterOpen, setfilterOpen] = useState(false)
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, p: 5 }}>
      <Drawer open={filterOpen} anchor="right" onClose={() => setfilterOpen(false)}>
        <Paper elevation={0}>
          <Filter onClose={()=>setfilterOpen(false)}/>
        </Paper>
      </Drawer>
      <Grid container spacing={2}>
        <Grid item md={4} lg={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper elevation={0}>
            <Filter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Grid container >
            <Grid item xs={12} >
              <SearchCard />
            </Grid>
            <Grid item xs={12} md={12}>
              <Jobs filterChange={()=>setfilterOpen(true)} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
