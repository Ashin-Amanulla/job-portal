import React from "react"
import UserLayout from "../../layout/userLayout"
import Home from "../../pages/Home"
import FindJobs from "../../pages/FindJobs"
import AboutUs from "../../pages/AboutUs"
import CreateJobs from "../../pages/CreateJobs"
import AdminLayout from "../../layout/adminLayout"
import Error404 from "../../pages/404"
import { Navigate } from "react-router-dom"
import Jobs from "../../pages/Jobs"

export const RoutesConfig = () => {

    return [
        {
            path:'/',
            element:<Navigate to='/jobs' replace/>
        },
        {
            path: '/jobs',
            element: <UserLayout />,
            children: [
                {
                    path: '',
                    element: <Home />,

                },
                {
                    path: 'home',
                    element: <Home />,

                },
                {
                    path: 'find-jobs',
                    element: <FindJobs />,

                },
                {
                    path: 'about-us',
                    element: <AboutUs />,

                },
                {
                    path: 'create-jobs',
                    element: <CreateJobs />,

                },
                {
                    path: '*',
                    element: <Error404 />,
                }
            ]
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children:[
                {
                    path: 'jobs',
                    element: <Jobs/>,
                },
                {
                    path: '*',
                    element: <Error404 />,
                }
            ]
        }
    ]
}