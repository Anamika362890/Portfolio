import React from 'react';
import img from "../../assests/2020-12-28-21-53-25-100-PhotoRoom (1).png"

const Banner = () => {
    return (
        <div className='bg-blue-900 flex justify-evenly items-center'>
            <div>
                <h1 className='text-lg'>Hi!!I am</h1>
                <h1 className='text-2xl'>Anamika Goswami</h1>
                <h1>Junior Web Developer || MERN Stack Developer</h1>
                <button className='btn btn-warning mr-6 '>Hire Me</button>
                <button className='btn btn-warning'>Download Resume</button>
            </div>
            <div className="avatar">
                <div className="w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div>


        </div>
    );
};

export default Banner;