import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const p = useLoaderData();
    console.log(p);


    return (
        <div className='text-white'>
            <h1>hiiiiiiiiiiiiiiiiiiiiiiii</h1>

        </div>
    );
};

export default ProjectDetails;