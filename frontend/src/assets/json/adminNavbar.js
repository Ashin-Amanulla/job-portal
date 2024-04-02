import { Person, SpaceDashboard, Work } from "@mui/icons-material";

export const adminNavActions = [
    {
        title:'dashboard',
        href:'admin/dashboard',
        icon: <SpaceDashboard/>
    },
    {
        title:'Jobs',
        href:'admin/jobs',
        icon: <Work/>
    },
    ,
    {
        title:'Users',
        href:'admin/users',
        icon: <Person/>
    }
]