import React from 'react'
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Stack,
  } from "@mui/material";


export default function ConnectUs() {
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
                Interested in Posting Job Opportunities?
              </Typography>
              <Typography variant="subtitle1" color={"#666"} gutterBottom>
                If you're looking to join our network of esteemed employers and have
                the ability to post job vacancies directly, we're eager to hear from
                you. Please reach out to us through our contact page with your
                organization's details and a brief overview of the job listings you
                wish to post. Our team will review your submission and contact you
                promptly to discuss the next steps for setting up your
                administrative access.
                <p>
                  <b>Connect With Us</b> - Your opportunity to attract top talent
                  begins here. Let's make it happen together.
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
                    <TextField variant="outlined" label="Name" fullWidth />
                    <TextField variant="outlined" label="mobile" fullWidth />
                    <TextField variant="outlined" label="email" fullWidth />
                    <TextField variant="outlined" label="JNV" fullWidth />
                    <TextField variant="outlined" label="Year" fullWidth />
                  </Stack>
    
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "8px", py: 1, px: 5 }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Box>
        </div>
      );
}
