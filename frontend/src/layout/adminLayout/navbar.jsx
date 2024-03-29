import styled from '@emotion/styled';
import { AppBar, Avatar, Box, Button, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Icon } from '@mui/material';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  border: 'none',
  boxShadow: 'none'
}));

export default function Navbar(props) {
  const { open, onSideBarOpen, ...other } = props;
  const navigate = useNavigate();



  return (
    <DashboardNavbarRoot
      sx={{
        left: {
          lg: 260
        },
        width: {
          lg: 'calc(100% - 260px)'
        },
        border: 'none'
      }}
      {...other}>
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2
        }}
      >
        <IconButton
          onClick={onSideBarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ paddingRight: '25px' }}>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <Stack sx={{ alignItems: 'end' }}>
            <Typography variant='subtitle1' sx={{ color: '#2a5f44', fontWeight: 500, lineHeight: '10px' }}>Gausul Haque</Typography>
            <Typography variant="caption" sx={{ color: '#555'}}>Admin</Typography>
          </Stack>
          <Avatar alt="Gausul Haque" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" /> {/* Replace '/path-to-your-image.jpg' with the path to your user's avatar image */}
        </Stack>

      </Toolbar>
    </DashboardNavbarRoot>
  );
};

