import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { green, pink, deepOrange, deepPurple } from "@mui/material/colors";

export default function JobCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, borderRadius: 2 }}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: green[500] }}>G</Avatar>
            <Button
              size="small"
              sx={{ minWidth: "auto", padding: "2px", color: deepPurple[500] }}
            >
              +
            </Button>
          </Stack>
          <Typography gutterBottom variant="h6" component="div">
            Sr. Product Designer
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Google • 12 Applicants
          </Typography>
          <Stack direction="row" spacing={1} mb={2}>
            <Chip label="Full-Time" color="primary" size="small" />
            <Chip label="Remote" color="secondary" size="small" />
            <Chip
              label="Expert"
              sx={{ bgcolor: pink[200], color: "white" }}
              size="small"
            />
          </Stack>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: deepOrange[800], mt: 2 }}
          >
            $102k/m
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Posted 12 days ago
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
