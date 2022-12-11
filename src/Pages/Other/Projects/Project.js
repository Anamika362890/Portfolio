import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({ project, setPro }) => {

    const { id, name, intro, img, tech, live } = project;
    return (
        <div >

            <div className="card w-96 bg-gray-900 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>A {intro} using {tech}</p>
                    <div className="card-actions">
                        <Link id={id} to={`/details/${id}`}><button className="btn btn-success text-white ">See Details</button></Link>

                        <a href={live}> <button className="btn btn-success text-white ">Live Link</button></a>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Project;