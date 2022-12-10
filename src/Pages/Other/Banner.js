import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assests/2020-12-28-21-53-25-100-PhotoRoom (1).png"

const Banner = () => {
    return (
        <div className=' my-20 p-20 rounded-2xl max-w-[1280px] mx-auto lg:flex justify-evenly items-center bg-gray-900'>
            <div>
                <h1 className='text-2xl text-white'>Hi!!I am 👋</h1>
                <h1 className='text-5xl font-bold my-2 text-success'>Anamika Goswami</h1>
                <h1 className='text-2xl text-white my-3'>Junior Web Developer <span className='text-success font-bold'>||</span> MERN Stack Developer</h1>
                <Link to="/contact"> <button className='btn btn-success text-white mr-1 '>Hire Me</button></Link>
                <a href='https://drive.google.com/file/d/1P2ubHzNzWYthkctueziOy_hZY_wTrlRa/view?usp=share_link' >   <button className='btn btn-success text-white'>Download Resume</button></a>
            </div>
            <div className="avatar">
                <div className="w-96  rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div>

        </div>
    );
};

export default Banner;