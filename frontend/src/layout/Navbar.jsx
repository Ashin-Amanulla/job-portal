import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Stack, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // You can replace this with a suitable logo icon
import { navActions } from '../assets/json/navbar';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <AppBar position="sticky" color="white" elevation={0}>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 250
          }
        }}
      >
        <Stack direction={'row'} sx={{ alignItems: 'center', p: 2 }}>
          {/* This icon can be replaced with your logo */}
          <img height={'50px'} src='https://img.freepik.com/free-vector/green-leaves-round-logo_78370-2097.jpg?w=1480&t=st=1711449455~exp=1711450055~hmac=29b73d809df5b2f287a263e3891d9c727872b3e73411bcb478ee986b70e61bd6' />
          <Typography variant="h5" color={'primary.dark'} sx={{ fontWeight: 600 }}>
            Navo Jobs
          </Typography>
        </Stack>
        <Stack direction="column" justifyContent={"start"} sx={{pl:3}}>
          {
            navActions.map((item, ind) => (
              <Button sx={{ textTransform: 'none' }} onClick={() => { setSelectedIndex(ind); navigate(`/${item.href}`); setDrawerOpen(false); }}>
                <Typography variant='body1'
                  color={ind === selectedIndex ? '#0a954f' : '#555'}
                  sx={{ fontWeight: ind === selectedIndex && 600, cursor: 'pointer',width:'100%' ,textAlign:'left' }}
                >
                  {item.title}
                </Typography>
              </Button>
            ))
          }
        </Stack>
      </Drawer>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={() => { setDrawerOpen(true) }} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Stack direction={'row'} sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
          {/* This icon can be replaced with your logo */}
          <img height={'50px'} src='https://img.freepik.com/free-vector/green-leaves-round-logo_78370-2097.jpg?w=1480&t=st=1711449455~exp=1711450055~hmac=29b73d809df5b2f287a263e3891d9c727872b3e73411bcb478ee986b70e61bd6' />
          <Typography variant="h5" color={'primary.dark'} sx={{ fontWeight: 600 }}>
            Navo Jobs
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' } }} spacing={4}>
          {
            navActions.map((item, ind) => (
              <Button sx={{ textTransform: 'none' }} onClick={() => { setSelectedIndex(ind); navigate(`/${item.href}`) }}>
                <Typography variant='body1'
                  color={ind === selectedIndex ? '#0a954f' : '#555'}
                  sx={{ fontWeight: ind === selectedIndex && 600, cursor: 'pointer'}}
                >
                  {item.title}
                </Typography>
              </Button>
            ))
          }
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack sx={{ alignItems: 'end' }}>
            <Typography variant='subtitle1' sx={{ color: '#2a5f44', fontWeight: 500, lineHeight: '10px' }}>Gausul Haque</Typography>
            <Typography variant="caption">Job Seeker</Typography>
          </Stack>
          <Avatar alt="Gausul Haque" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" /> {/* Replace '/path-to-your-image.jpg' with the path to your user's avatar image */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
