import { faAddressBook, faAddressCard, faInbox, faLocation, faMailReply, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assests/2020-12-28-21-53-25-100-PhotoRoom (1).png"
import home from "../../assests/Gmail.png"
import "../Other/Banner.css"

const Banner = () => {
    return (
        <div className=' my-20 lg:p-20 pb-10 lg:pb-16 rounded-2xl max-w-[320px] shadow-2xl md:max-w-[700px] lg:max-w-[1280px] mx-auto lg:flex justify-evenly items-center bg-gray-900'>
            <div className="avatar my-10 lg:hidden ">
                <div className="lg:w-20 h-[150px] md:mx-72 mx-20  rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="" />
                </div>
            </div>

            <div className='text-center lg:text-justify' >
                <h1 className='lg:text-2xl md:text-4xl text-xl text-white'>Hi!!I am 👋</h1>
                <h1 className='lg:text-5xl md:text-6xl text-3xl font-bold lg:mb-0 md:mb-0 mb-3 md:my-3 lg:my-2 text-success mx-'>Anamika Goswami</h1>
                <h1 className='lg:text-2xl md:text-3xl text-sm lg:mb-4 mb-5 md:mb-7 text-white lg:my-3'>Junior Web Developer <span className='text-success font-bold'>||</span> MERN Stack Developer</h1>

                <Link to="/contact"> <button className='btn btn-success text-white mr-1 '>Hire Me</button></Link>
                <a href='https://drive.google.com/uc?id=1P2ubHzNzWYthkctueziOy_hZY_wTrlRa&export=download' >   <button className='btn btn-success  text-white'>Download Resume</button></a>
            </div>
            <div className="avatar hidden lg:block ">
                <div className="lg:w-96  rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img className='h-[134px]' src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;