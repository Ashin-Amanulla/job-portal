import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // You can replace this with a suitable logo icon

export default function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon /> {/* This icon can be replaced with your logo */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jobify
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Find Jobs</Button>
          <Button color="inherit">Hire Talent</Button>
          <Button color="inherit">Create Job</Button>
          <Button color="inherit">About</Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography component="div">Gausul Haque</Typography>
          <Avatar alt="Gausul Haque" src="/path-to-your-image.jpg" /> {/* Replace '/path-to-your-image.jpg' with the path to your user's avatar image */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
