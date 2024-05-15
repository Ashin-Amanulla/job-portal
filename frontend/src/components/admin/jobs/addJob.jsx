import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Select,
  MenuItem,
  TextField,
  TextareaAutosize,
  Typography,
  FormHelperText,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import StyledTextfield from "../../../ui/styledTextfield";
import { jobTitles } from "../../../assets/json/jobTitles";
import { jobTypes } from "../../../assets/json/jobTypes";
import { IndustryTypes } from "../../../assets/json/industryTypes";
import { experienceLevel } from "../../../assets/json/experienceLevel";
import { workLocation } from "../../../assets/json/workLocation";

export default function AddJob({ open, onClose }) {
  const [selectedFile, setSelectedFile] = useState();

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // if (!selectedFile) {
    //   setError("company", {
    //     type: "manual",
    //     message: "Select logo of company",
    //   });
    //   return;
    // }
    console.log(data);
  };

  const dialogClose = () => {
    reset({});
    onClose();
  };

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "primary.dark", fontWeight: 600 }}
        >
          Add Job
        </Typography>
        <IconButton onClick={dialogClose}>
          <Close />
        </IconButton>
      </Stack>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Stack p={2} spacing={2}>
          <Stack>
            <Typography variant="subtitle2">Job Title</Typography>
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControl fullWidth error={!!error}>
                    <Select {...field} displayEmpty value={field.value || ""}>
                      <MenuItem value="" disabled>
                        Enter Job Title
                      </MenuItem>
                      {jobTitles.map((title, index) => (
                        <MenuItem key={index} value={title}>
                          {title}
                        </MenuItem>
                      ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                  </FormControl>
                </>
              )}
              rules={{ required: "Enter the Job Name" }}
            />
          </Stack>
          <Stack>
            <Typography variant="subtitle2">Industry</Typography>
            <Controller
              name="industry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControl fullWidth error={!!error}>
                    <Select {...field} displayEmpty value={field.value || ""}>
                      <MenuItem value="" disabled>
                        Enter Industry
                      </MenuItem>
                      {IndustryTypes.map((title, index) => (
                        <MenuItem key={index} value={title}>
                          {title}
                        </MenuItem>
                      ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                  </FormControl>
                </>
              )}
              rules={{ required: "Enter the Job Name" }}
            />
          </Stack>
          <Stack >
            <Typography variant="subtitle2">Company Name</Typography>

              {/* <Stack>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  type="file"
                  id="raised-button-file"
                  onChange={onFileChange}
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none", height: "40px" }}
                    onClick={() => {
                      document.getElementById("raised-button-file").click();
                    }}
                  >
                    Add Logo
                  </Button>
                </label>
              </Stack> */}
              <Controller
                name="company_name"
                control={control}
                render={({ field }) => (
                  <StyledTextfield
                    placeholder="Enter Company Name"
                    {...field}
                    sx={{ flexGrow: 1 }}
                  />
                )}
                rules={{ required: "Enter the Company Name" }}
              />
            {errors.company && (
              <span style={errorMsgStyle}>{errors.company.message}</span>
            )}
          </Stack>
          <Stack>
            <Typography variant="subtitle2">Location</Typography>
            <Stack direction={"row"} spacing={0.5}>
              <Stack>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <StyledTextfield
                      placeholder="Enter Country"
                      {...field}
                      sx={{ flexGrow: 1 }}
                    />
                  )}
                  rules={{ required: "Enter the City" }}
                />
                {errors.city && (
                  <span style={errorMsgStyle}>{errors.city.message}</span>
                )}
              </Stack>

              <Stack>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <StyledTextfield
                      placeholder="Enter State"
                      {...field}
                      sx={{ flexGrow: 1 }}
                    />
                  )}
                  rules={{ required: "Enter the state" }}
                />
                {errors.state && (
                  <span style={errorMsgStyle}>{errors.state.message}</span>
                )}
              </Stack>

              <Stack>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <StyledTextfield
                      placeholder="Enter City"
                      {...field}
                      sx={{ flexGrow: 1 }}
                    />
                  )}
                  rules={{ required: "Enter the Country" }}
                />
                {errors.country && (
                  <span style={errorMsgStyle}>{errors.country.message}</span>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">
              Job Description(max 250 char)
            </Typography>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <>
                  <textarea
                    {...field}
                    maxLength={250}
                    style={{
                      height: "100px",
                      resize: "none",
                      padding: "10px",
                      outlineColor: "#119856",
                      borderRadius: "4px",
                    }}
                    placeholder="Enter Job Description"
                    {...field}
                  />
                  {errors.description && (
                    <span style={errorMsgStyle}>
                      {errors.description.message}
                    </span>
                  )}
                </>
              )}
              rules={{ required: "Enter the Job Description" }}
            />
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Stack flexGrow={1}>
              <Typography variant="subtitle2">Job Type</Typography>
              <Controller
              name="job_type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControl fullWidth error={!!error}>
                    <Select {...field} displayEmpty value={field.value || ""}>
                      <MenuItem value="" disabled>
                        Enter Job Type
                      </MenuItem>
                      {jobTypes.map((title, index) => (
                        <MenuItem key={index} value={title}>
                          {title}
                        </MenuItem>
                      ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                  </FormControl>
                </>
              )}
              rules={{ required: "Enter the Job Type" }}
            />
            </Stack>
            <Stack flexGrow={1}>
              <Typography variant="subtitle2">Job Closing</Typography>
              <Controller
                name="closing_date"
                control={control}
                render={({ field }) => (
                  <>
                    <DatePicker format="DD/MM/YYYY" {...field} />
                    {errors.closing && (
                      <span style={errorMsgStyle}>
                        {errors.closing.message}
                      </span>
                    )}
                  </>
                )}
                rules={{ required: "Select Date" }}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack flexGrow={1}>
              <Typography variant="subtitle2">Work nature</Typography>
              <Controller
              name="work_nature"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControl fullWidth error={!!error}>
                    <Select {...field} displayEmpty value={field.value || ""}>
                      <MenuItem value="" disabled>
                        Enter Work Type
                      </MenuItem>
                      {workLocation.map((title, index) => (
                        <MenuItem key={index} value={title}>
                          {title}
                        </MenuItem>
                      ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                  </FormControl>
                </>
              )}
              rules={{ required: "Enter Work Location" }}
            />
            </Stack>
            <Stack flexGrow={1}>
              <Typography variant="subtitle2">Experience Level</Typography>
              <Controller
              name="experience_level"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <FormControl fullWidth error={!!error}>
                    <Select {...field} displayEmpty value={field.value || ""}>
                      <MenuItem value="" disabled>
                        Enter Experience Level
                      </MenuItem>
                      {experienceLevel.map((title, index) => (
                        <MenuItem key={index} value={title}>
                          {title}
                        </MenuItem>
                      ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                  </FormControl>
                </>
              )}
              rules={{ required: "Enter the Job Type" }}
            />
            </Stack>
          </Stack>
       
          <Stack>
            <Typography variant="subtitle2">Link/Reference</Typography>
            <Controller
              name="link"
              control={control}
              render={({ field }) => (
                <>
                  <StyledTextfield
                    placeholder="email / website / contact no"
                    {...field}
                  />
                  {errors.apply && (
                    <span style={errorMsgStyle}>{errors.apply.message}</span>
                  )}
                </>
              )}
              rules={{ required: "Enter url" }}
            />
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"end"} p={2} spacing={2}>
          <Button
            variant="outlined"
            sx={{ borderColor: "#777", color: "#777" }}
            onClick={dialogClose}
          >
            Cancel
          </Button>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Dialog>
  );
}

const errorMsgStyle = {
  color: "red",
  fontSize: "12px",
  fontStyle: "italic",
};
