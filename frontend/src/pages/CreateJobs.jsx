import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAdminStore } from "../store/adminStore";
import { adminLogin } from "../services/admin";

export default function CreateJobs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getLogin = useAdminStore((state) => state.getLogin);
const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const user = await adminLogin(data);
      getLogin(user.data);
      navigate('/admin/jobs')
    } catch (error) {
      console.log('dsa');
      alert("error: " + error.response.data);
    }
  };
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
            Please use your credentials to log in to your dashboard. Here,
            you'll be able to post new job openings, update existing listings,
            and curate the opportunities presented to our community.
            <p>
              Not an administrator yet but interested in becoming one?{" "}
              <Link to="/connect-us" underline="hover">
                <b>Contact us </b>
              </Link>{" "}
              to learn how you can join our network of administrators.
            </p>
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={5}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                direction={"column"}
                spacing={2}
                sx={{
                  width: "100%",
                  "@media (min-width: 600px)": {
                    width: "50%",
                  },
                }}
              >
                <Stack
                  direction={"column"}
                  spacing={2}
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <TextField
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    variant="outlined"
                    label="Email"
                    fullWidth
                  />
                  <TextField
                    {...register("password", {
                      required: "Password is required",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    type="password"
                    variant="outlined"
                    label="Password"
                    fullWidth
                  />
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "8px", py: 1, px: 5 }}
                >
                  Submit
                </Button>
                {/* <Typography align="center" variant="subtitle2">Forgot Password?    Contact us</Typography> */}
              </Stack>
            </form>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
