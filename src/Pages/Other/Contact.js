import { faInbox, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-router-dom';

const Contact = () => {
    return (

        <div className='App text-white my-0 mb-6 md:max-w-[700px] lg:max-w-[1280px] max-w-[300px] mx-auto'>
            <h1 className='text-success text-4xl font-bold my-4'>Contact Me</h1>
            <p>Please do not hesitate to contact me
                , I will  try to give you my best.</p>
            {/* <section className='flex text-center'>
                <FontAwesomeIcon className='text-warning text-2xl mt-1 mr-2' icon={faLocation}></FontAwesomeIcon>
                <h1 className='text-xl text-white'>Dhaka,Bangladesh</h1>
            </section> */}
            <div>
                <div className='flex items-center justify-center my-4 '>

                    <FontAwesomeIcon className='text-warning text-2xl mt-1 mr-2 ' icon={faLocation}></FontAwesomeIcon>
                    <h1 className='text-xl text-white'>Dhaka,Bangladesh</h1>
                </div>
                <div className='flex my-4 justify-center'>

                    <FontAwesomeIcon className='text-warning text-2xl mt-1 mr-2' icon={faInbox}></FontAwesomeIcon>

                    <h1 className='text-xl text-white'>anamika362890@gmail.com</h1>
                </div>
            </div>



            <h1 className='text-3xl my-4'>OR</h1>

            <form target="_blank" action="https://formsubmit.co/anamika362890@gmail.com" method="POST">

                <input type="text" placeholder="Enter Your Name" className=" mb-5 text-gray-900 input input-bordered w-full max-w-xl" required /> <br></br>
                <input type="email" placeholder="Enter Your Email" className="input mb-5 input-bordered w-full max-w-xl text-gray-900 " required /><br></br>
                <textarea className="textarea mb-5 input-bordered w-full max-w-xl text-gray-900 pb-9  " placeholder="Message"></textarea>
                <br></br>
                <button className='btn btn-success text-white mt-9'>Send Message</button>

            </form>






        </div>
    );
};

export default Contact;