import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  CardActionArea,
} from "@mui/material";

import { AutoAwesome, History } from "@mui/icons-material";
import { justNow } from "../util/datetime";

export default function JobCard({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ borderRadius: "8px", boxShadow: "none" }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px",
                    width: "50px",
                    backgroundColor: "primary.background",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    width={"90%"}
                    height={"90%"}
                    src={`${data.companyLogo}`}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Stack direction={"column"}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    fontWeight={500}
                    lineHeight={"14px"}
                  >
                    {data.title}
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      children={data.company}
                    />
                    <AutoAwesome sx={{ fontSize: "16px", color: "#0b0" }} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} paddingY={2}>
              <Chip
                label="Full-Time"
                size="small"
                sx={{
                  borderRadius: "6px",
                  color: "#339bff",
                  backgroundColor: "#daedfe",
                }}
              />
              <Chip
                label="Remote"
                size="small"
                sx={{
                  borderRadius: "6px",
                  color: "#9f4cfe",
                  backgroundColor: "#f1e2ff",
                }}
              />
              <Chip
                label="Expert"
                size="small"
                sx={{
                  borderRadius: "6px",
                  color: "#ffa543",
                  backgroundColor: "#fff0d9",
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {data.jobDescribe}
            </Typography>
          </CardContent>
          <Divider sx={{ mt: 1, mx: 2 }} />
        </CardActionArea>
        <Stack direction={"row"} sx={{ p: 2, justifyContent: "space-between" }}>
          {/* <Stack>
            <Stack direction={"row"} sx={{ alignItems: 'center' }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '22px', fontWeight: 500 }}
              >
                ${data.salary}k
              </Typography>
              <Typography variant="body2" color={"#999"} children="/m" />
            </Stack>

          </Stack> */}
          <Stack direction="row" alignItems="center">
            <History fontSize="small" sx={{ color: "#999" }} />
            <Typography variant="body2" color="text.secondary">
              Posted {justNow(data.dateTime)}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={0.5} paddingX={2} direction={"row"}>
          <Typography variant="subtitle2" sx={{ color: "grey" }}>
            Reference:
          </Typography>
          <Typography variant="subtitle2">{data.applyon}</Typography>
        </Stack>
      </Card>

      {/* Modal */}

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Job Details</DialogTitle>
        <DialogContent>
        <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px",
                    width: "50px",
                    backgroundColor: "primary.background",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    width={"90%"}
                    height={"90%"}
                    src={`${data.companyLogo}`}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Stack direction={"column"}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    fontWeight={500}
                    lineHeight={"14px"}
                  >
                    {data.title}
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      children={data.company}
                    />
                    <AutoAwesome sx={{ fontSize: "16px", color: "#0b0" }} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} paddingY={2}>
              <Chip
                label="Full-Time"
                size="small"
                sx={{
                  borderRadius: "6px",
                  color: "#339bff",
                  backgroundColor: "#daedfe",
                }}
              />
              <Chip
                label="Remote"
                size="small"
                sx={{
                  borderRadius: "6px",
                  color: "#9f4cfe",
                  backgroundColor: "#f1e2ff",
                }}
              />
              <Chip
                label="Expert"
                size="small"
                sx={{
                  borderRadius: "6px",
                  color: "#ffa543",
                  backgroundColor: "#fff0d9",
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {data.jobDescribe}
            </Typography>
            <Divider sx={{ mt: 1, mx: 2 }} />
        <Stack direction={"row"} sx={{ p: 2, justifyContent: "space-between" }}>
          {/* <Stack>
            <Stack direction={"row"} sx={{ alignItems: 'center' }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '22px', fontWeight: 500 }}
              >
                ${data.salary}k
              </Typography>
              <Typography variant="body2" color={"#999"} children="/m" />
            </Stack>

          </Stack> */}
          <Stack direction="row" alignItems="center">
            <History fontSize="small" sx={{ color: "#999" }} />
            <Typography variant="body2" color="text.secondary">
              Posted {justNow(data.dateTime)}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={0.5} paddingX={2} direction={"row"}>
          <Typography variant="subtitle2" sx={{ color: "grey" }}>
            Reference:
          </Typography>
          <Typography variant="subtitle2">{data.applyon}</Typography>
        </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
}
