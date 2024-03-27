import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export default function CreateJobs() {

  return (
    <div>
      <Box sx={{ px: { xs: 2, md: 6 }, p: 5 }}>
        <Paper
          elevation={0}
          sx={{ p: { xs: 1, md: 3 }, borderRadius: "8px", width: "100%" }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ fontSize: { xs: "22px", md: "40px" } }}
            color={"primary.darkest"}
            gutterBottom
          >
            Job Management for Approved Administrators
          </Typography>
          <Typography variant="subtitle1" color={"#666"} gutterBottom>
          Please use your credentials to log in to your dashboard. Here, you'll be able to post new job openings, update existing listings, and curate the opportunities presented to our community.
            <p>
            Not an administrator yet but interested in becoming one? <Link to="/connect-us" underline="hover" ><b>Contact us </b></Link> to learn how you can join our network of administrators.
            </p>
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={5}
          
          >
            <Stack
              direction={"column"}
              spacing={2}
              sx={{ width: "100%",  '@media (min-width: 600px)': {
                width: '50%', 
              }}}
            >
              <Stack
                direction={"column"}
                spacing={2}
                sx={{
                  flexGrow: 1,
                }}
              >
                <TextField variant="outlined" label="Email" fullWidth />
                <TextField variant="outlined" label="Password" fullWidth />
               </Stack>

              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "8px", py: 1, px: 5 }}
              >
                Submit
              </Button>
              {/* <Typography align="center" variant="subtitle2">Forgot Password?    Contact us</Typography> */}
            </Stack>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
