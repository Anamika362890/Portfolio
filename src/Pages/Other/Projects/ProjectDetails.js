import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = ({ Pro, setPro }) => {
    const { name, intro, live, server, client, tech, Overview, img, img1, img2, img3 } = Pro;


    return (
        <div >
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle bg-slate-500" />
                <div className="modal">
                    <div className="modal-box relative ">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold  text-success" >{intro} </h3>
                        <div className="card md:w-96 w-82 bg-base-100 shadow-xl md:mx-10 my-7">
                            <div className="carousel w-full">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src={img} className="w-full" alt='' />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src={img1} alt="" className="w-full h-72" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img src={img2} alt="" className="w-full h-72" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img src={img3} className="w-full h-72" alt='' />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bg-gray-900">
                                <h2 className="card-title">
                                    <h1 className='underline text-right text-success'>Overview</h1>


                                </h2>
                                <p className='text-white text-left '>{Overview}</p>
                                <h2 className="card-title">
                                    <h1 className='underline text-right text-success'>Technology</h1>


                                </h2>
                                <p className='text-white text-left '>{tech}</p>

                                <div className="card-actions my-3 justify-end">



                                    <a href={live}><div className="badge badge-success badge-outline  ">Live Link</div></a>
                                    <a href={server}><div className="badge badge-success badge-outline  ">Server Link</div></a>
                                    <a href={client}><div className="badge badge-success badge-outline  ">Client Link</div></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </>

        </div>
    );
};

export default ProjectDetails;