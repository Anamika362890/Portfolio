import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/Other/AboutMe";
import Contact from "../Pages/Other/Contact";
import Projects from "../Pages/Other/Projects";
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
                    element: <Projects></Projects>
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                },
                {
                    path: "/services",
                    element: <Services></Services>
                }
            ]
        },


    ])