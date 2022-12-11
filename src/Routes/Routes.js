import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/Other/AboutMe";
import Contact from "../Pages/Other/Contact";
import ProjectDetails from "../Pages/Other/Projects/ProjectDetails";
import Projects from "../Pages/Other/Projects/Projects";

import Services from "../Pages/Other/Services";

export const router = createBrowserRouter(

    [

        {
            path: "/",

            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/about",
                    element: <AboutMe></AboutMe>
                },
                {
                    path: "/projects",
                    element: <Projects></Projects>,
                    loader: () => fetch('Data.json'),
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                },
                {
                    path: "/services",
                    element: <Services></Services>
                },
                {
                    path: "/blogs",
                    element: <Blogs></Blogs>
                },
                {
                    path: "/details/:id",
                    loader: async ({ params }) => {
                        return fetch(`Data.json/${params.id}`)
                    },
                    element: <ProjectDetails></ProjectDetails>
                }
            ]
        },


    ])