import { faEye, faEyeLowVision } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import img from "../../assests/96479-student-girl-academy.gif"

const AboutMe = () => {

    return (
        <div className='max-w-[1280px] mx-auto my-20 '>

            <div className='grid grid-cols-2 gap-20  '>
                <div>
                    <img className='rounded-3xl ' src={img} alt="" />
                </div>
                <div className=' my-5 border-l-2 border-success px-5 text-white'>
                    <h1 className='text-4xl font-bold text-success'>About Me</h1>
                    <p className='my-4'>I am Anamika Goswami.I am from Dhaka,Bangladesh.I am a Front-end developer,Specially MERN Developer.I have completed BSC in Computer Science and Engineering in 2021.</p>
                    <div >
                        <div>
                            <h1 className='text-success font-bold underline my-4'>Skills</h1>
                            <p>HTML, CSS, Bootstrap, Tailwind, React-Js, React-Bootstrap,
                                JavaScript, React Router, Authentication,MongoDB, Node.js,Node.JS, Next.js</p>


                        </div>
                        <div>
                            <h1 className='text-success font-bold underline my-4'>Tools</h1>
                            <p>GitHub, Netlify, Firebase, VSCode, Figma.</p>


                        </div>
                        <div>
                            <h1 className='text-success font-bold underline my-4'>Education</h1>
                            <p>BSC in CSE From Stamford University Of Bangladesh</p>
                            <p>Duration: 2017-2021</p>


                        </div>
                        <div>
                            <h1 className='text-success font-bold underline my-4'>Courses</h1>
                            <p>CompleteComplete Web Development Course
                            </p>
                            <p>Programming Hero, Online (July 2022-Present)</p>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;