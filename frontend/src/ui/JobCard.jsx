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
  IconButton,
  Divider,
  CardActions,
  CardActionArea,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { green, pink, deepOrange, deepPurple } from "@mui/material/colors";
import { AutoAwesome, BookmarkAdd, History } from "@mui/icons-material";
import { justNow } from "../util/datetime";

export default function JobCard({ data }) {
  return (
    <div>
      <Card sx={{ borderRadius: '8px', boxShadow: 'none' }}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction={"row"}
              alignItems="center"
              justifyContent={"center"}
              spacing={1}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px', width: '50px',
                  backgroundColor: 'primary.background',
                  borderRadius: '8px'
                }}>
                {/* company logo  */}
                <img width={"90%"} height={'90%'}
                  src={`${data.companyLogo}`} style={{ objectFit: 'contain' }} />
              </Box>
              <Stack direction={"column"}>
                <Typography gutterBottom variant="subtitle1" fontWeight={500} lineHeight={'14px'}>
                  {data.title}
                </Typography>
                <Stack direction={'row'} spacing={1}>
                  <Typography variant="caption" color="text.secondary" children={data.company} />
                  <AutoAwesome sx={{ fontSize: '16px', color: '#0b0' }} />
                  <Typography variant="caption" color="text.secondary" children='12 Applicants' />
                </Stack>
              </Stack>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
              <IconButton>
                <BookmarkAdd sx={{ fontSize: '20px', color: data.favourite && '#090' }} />
              </IconButton>
            </Box>
          </Stack>
          <Stack direction="row" spacing={1} mb={2}>
            <Chip label="Full-Time" size="small"
              sx={{ borderRadius: '6px', color: '#339bff', backgroundColor: '#daedfe' }} />
            <Chip label="Remote" size="small"
              sx={{ borderRadius: '6px', color: '#9f4cfe', backgroundColor: '#f1e2ff' }} />
            <Chip label="Expert" size="small"
              sx={{ borderRadius: '6px', color: '#ffa543', backgroundColor: '#fff0d9' }} />
          </Stack>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.jobDescribe}
          </Typography>
          <Stack mt={0.3} direction={"row"} justifyContent={"space-between"}>
            <Typography variant="subtitle2" sx={{ color: 'grey' }}>Requirements</Typography>
            <Typography variant="subtitle2">{data.Requirements}</Typography>
          </Stack>
          <Stack mt={0.3} direction={"row"} justifyContent={"space-between"}>
            <Typography variant="subtitle2" sx={{ color: 'grey' }}>Experience</Typography>
            <Typography variant="subtitle2">{data.Experience}</Typography>
          </Stack>
        </CardContent>
        <Divider sx={{ mt: 1, mx: 2 }} />
        <Stack direction={"row"} sx={{ p: 2, justifyContent: 'space-between' }}>
          <Stack>
            <Stack direction={"row"} sx={{ alignItems: 'center' }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '22px', fontWeight: 500 }}
              >
                ${data.salary}k
              </Typography>
              <Typography variant="body2" color={"#999"} children="/m" />
            </Stack>

          </Stack>
          <Stack direction="row" alignItems="center" >
            <History fontSize="small" sx={{ color: '#999' }} />
            <Typography variant="body2" color="text.secondary">
              Posted {justNow(data.dateTime)}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={0.5} direction={"row"} >
          <Typography variant="subtitle2" sx={{ color: 'grey' }}>Apply on :</Typography>
          <Typography variant="subtitle2">{data.applyon}</Typography>
        </Stack>
      </Card>
    </div >
  );
}
