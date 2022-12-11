import React, { useEffect } from 'react';

import foodie from "../../../assests/foodie.png"
import coding from "../../../assests/coding.png"
import quiz from "../../../assests/quick.png"
import Project from './Project';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import { useLoaderData } from 'react-router-dom';

const Projects = () => {





    const [Pro, setPro] = useState(null);
    const [ProjectssData, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, [])

    return (
        <div className='text-white  md:max-w-[700px] lg:max-w-[1280px] max-w-[300px] mx-auto mt-20 mb-5 text-center'>
            <h1 className='text-4xl  text-success font-bold mt-10 my-5'>My Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
                {
                    ProjectssData.map(project => <Project
                        key={project.id}
                        project={project}
                        Pro={Pro}
                        setPro={setPro}

                    ></Project>)
                }

                {
                    Pro &&
                    <ProjectDetails
                        Pro={Pro}
                        setPro={setPro}

                    >

                    </ProjectDetails>
                }
            </div>

        </div>
    );
};

export default Projects;