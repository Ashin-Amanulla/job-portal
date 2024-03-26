import React, { useState } from 'react';
import { Box, Typography, Checkbox, Button, FormGroup, FormControlLabel, Slider } from '@mui/material';

export default function Filter() {

    const [salaryRange, setSalaryRange] = useState([50000, 120000]);

    const handleSalaryChange = (event, newValue) => {
      setSalaryRange(newValue);
    };
  


  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
    <Typography variant="h6" gutterBottom>
      Filter
      <Button size="small" sx={{ float: 'right' }}>Reset</Button>
    </Typography>
    
    <Typography gutterBottom>Sort By</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Recently" />
      <FormControlLabel control={<Checkbox />} label="A-Z" />
      <FormControlLabel control={<Checkbox />} label="Top Salary" />
      <FormControlLabel control={<Checkbox />} label="Rating" />
    </FormGroup>
    
    <Typography gutterBottom>Salary Range</Typography>
    <Slider
      value={salaryRange}
      onChange={handleSalaryChange}
      valueLabelDisplay="auto"
      getAriaValueText={(value) => `$${value}k/m`}
      min={50000}
      max={120000}
    />
    
    <Typography gutterBottom>Job Type</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Full-Time" />
      <FormControlLabel control={<Checkbox />} label="Part-Time" />
      <FormControlLabel control={<Checkbox />} label="Contractual" />
      <FormControlLabel control={<Checkbox />} label="Freelance" />
      <FormControlLabel control={<Checkbox />} label="Internship" />
    </FormGroup>
    
    <Typography gutterBottom>Work Location</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="On-Site" />
      <FormControlLabel control={<Checkbox />} label="Remote" />
      <FormControlLabel control={<Checkbox />} label="Hybrid" />
    </FormGroup>
    
    <Typography gutterBottom>Experience Level</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Fresher" />
      <FormControlLabel control={<Checkbox />} label="Beginner" />
      <FormControlLabel control={<Checkbox />} label="Intermediate" />
      <FormControlLabel control={<Checkbox />} label="Expert" />
    </FormGroup>
  </Box>
  )
}
