import React, { useState } from 'react';
import { Box, Typography, Checkbox, Button, FormGroup, FormControlLabel, Slider, Divider, Grid, IconButton } from '@mui/material';
import StyledSlider from './StyledSlider';
import StyledCheckBox from './styledCheckBox';
import { Close } from '@mui/icons-material';

export default function Filter({ onClose }) {

  const [salaryRange, setSalaryRange] = useState([0, 200]);

  const handleSalaryChange = (event, newValue) => {
    setSalaryRange(newValue);
  };



  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: 'white', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom fontWeight={600} color={'primary.darkest'}>
        {onClose &&
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        }
        Filter
        <Button size="small" sx={{ float: 'right', textTransform: 'none', fontSize: '16px', fontWeight: 200 }}>Reset</Button>
      </Typography>
      <Divider />
      <Typography gutterBottom variant='body1' sx={{ fontWeight: 600, mt: 2 }} color={'primary.darkest'}>Sort By</Typography>
      <FormGroup>
        <Grid container>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Recently" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="A-Z" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Top Salary" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Rating" />} />
          </Grid>
        </Grid>
      </FormGroup>

      <Typography gutterBottom variant='body1' sx={{ fontWeight: 600, mt: 2 }} color={'primary.darkest'}>Salary Range</Typography>
      <Box px={3}>
        <StyledSlider
          value={salaryRange}
          onChange={handleSalaryChange}
          valueLabelDisplay="on"
          min={0}
          max={200}
          valueLabelFormat={(value) => `$${value}k/m`}
        />
      </Box>


      <Typography gutterBottom variant='body1' sx={{ fontWeight: 600, mt: 2 }} color={'primary.darkest'}>Job Type</Typography>
      <FormGroup>
        <Grid container>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Full-Time" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Part-Time" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Contractual" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Freelance" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Internship" />} />
          </Grid>
        </Grid>
      </FormGroup>

      <Typography gutterBottom variant='body1' sx={{ fontWeight: 600, mt: 2 }} color={'primary.darkest'}>Work Location</Typography>
      <FormGroup>
        <Grid container>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="On-Site" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Remote" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Hybrid" />} />
          </Grid>
        </Grid>
      </FormGroup>
      <Typography gutterBottom variant='body1' sx={{ fontWeight: 600, mt: 2 }} color={'primary.darkest'}>Experience Level</Typography>
      <FormGroup>
        <Grid container>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Fresher" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Beginner" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Intermediate" />} />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel control={<StyledCheckBox />} label={<Typography variant='subtitle2' fontWeight={200} children="Expert" />} />
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  )
}
