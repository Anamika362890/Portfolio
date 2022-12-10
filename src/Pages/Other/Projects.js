import React from 'react';
import Project from './Project';
import foodie from "../../assests/foodie.png"
import coding from "../../assests/coding.png"

const Projects = () => {

    const ProjectssData = [
        {
            id: 1,
            name: "Foodies-Express",
            intro: "Food Review Website",
            img: foodie,
            live: "https://foodies-express-61c7a.web.app/",
            server: "Server-side-code:https://github.com/Anamika362890/foodie-express-server",
            client: "https://github.com/Anamika362890/foodie-express-client",
            tech: "React.js, HTML, Node.js, Express.js, MongoDB, Firebase, Tailwind-CSS"

        },
        {
            id: 2,
            name: "Coding School",
            intro: "Learning Platform Website",
            live: "https://coding-school-client.web.app/",
            img: coding,
            server: "https://github.com/Anamika362890/coding-school-server",
            client: "https://github.com/Anamika362890/coding-school",
            tech: "HTML, CSS, Bootstrap,Vercel, React.js, Express.js, Firebase,MongoDB"


        },




    ]

    return (
        <div className='text-white max-w-[1280px] mx-auto my-20 text-center'>
            <h1 className='text-4xl  text-success font-bold my-10'>My Project</h1>
            <div className='grid grid-cols-3'>
                {
                    ProjectssData.map(project => <Project
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;