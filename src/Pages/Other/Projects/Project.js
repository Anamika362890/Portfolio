import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({ project, setPro }) => {

    const { id, name, intro, img, tech, live } = project;
    return (
        <div >

            <div className="card:w-96 lg:h-[58vh] md:[300vh] rounded-md bg-gray-900 shadow-3xl">
                <figure className="px-10 pt-10">
                    <img className="overflow-y-auto rounded-xl " src={img} alt="" />
                </figure>
                <div className="card-body items-center text-center h- ">
                    <h2 className="card-title">{name}</h2>
                    <p>A {intro} using {tech}</p>
                    <div className="card-actions">
                        <label

                            htmlFor="booking-modal"
                            className="btn btn-success  text-white"
                            onClick={() => setPro(project)}

                        >See Details</label>

                        <a href={live}> <button className="btn btn-success text-white ">Live Link</button></a>



                    </div>
                </div>
            </div>

        </div >
    );
};

export default Project;