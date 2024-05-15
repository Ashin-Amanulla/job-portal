import { useState, useMemo, useEffect } from "react";
import { Box, Button, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { adminNavActions } from "../../assets/json/adminNavbar";

const Sidebar = ({ open, onClose, ...props }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"))
  const navigate = useNavigate()


  const Navitem = ({item,...props})=>{
    let act = false
    if (`/${item.href}` === window.location.pathname) {
      act=true
    }
    return(
      <Button
      startIcon={item.icon}
      sx={{backgroundColor:act ? 'primary.main':'primary.background',
      py:1,px:2,borderRadius:'8px',
      justifyContent: 'flex-start',
      color: act ? '#fff' : '#666',
      '&:hover':{
        backgroundColor:'secondary.main',
        color: '#fff'
      }}}
      {...props}
      >
        {item.title}
      </Button>
    )
  }

  const Content = () => {

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 4 }}>
          <Stack direction={'row'} sx={{ alignItems: 'center', p: 2 }}>
            {/* This icon can be replaced with your logo */}
            <img height={'50px'} src='https://img.freepik.com/free-vector/green-leaves-round-logo_78370-2097.jpg?w=1480&t=st=1711449455~exp=1711450055~hmac=29b73d809df5b2f287a263e3891d9c727872b3e73411bcb478ee986b70e61bd6' />
            <Typography variant="h5" color={'primary.dark'} sx={{ fontWeight: 600 }}>
              Novoday Jobs
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            maxHeight: "calc(100vh - 15px)",
            overflowY: "auto",
          }}
        >
          <Stack spacing={1} m={2}>
          {adminNavActions.map((item, index) => {
            return (
              <Navitem key={index} item={item} onClick={()=>{navigate(`/${item.href}`)}} />
            );
          })}
          </Stack>
        </Box>
      </Box>
    );
  }

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            color: "secondary.contrastText",
            width: 260,
            border: "none",
          },
        }}
        variant="permanent"
      >
        <Content />
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#fff",
          color: "secondary.contrastText",
          width: 260,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <Content />
    </Drawer>
  );
};

export default Sidebar;
