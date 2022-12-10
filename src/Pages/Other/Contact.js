import React from 'react';
import { Form } from 'react-router-dom';

const Contact = () => {
    return (

        <div className='App text-white'>
            <h1>Contact Me</h1>
            <p>Please do not hesitate to contact me
                , I will  try to give you my best.</p>
            <h1>Address : Dhaka,Bangladesh</h1>
            <h1>Email : Anamika362890@gmail.com</h1>
            <h1>OR</h1>


            <input type="text" placeholder="Type here" className=" mb-5 input input-bordered w-full max-w-xs" /> <br></br>
            <input type="text" placeholder="Type here" className="input mb-5 input-bordered w-full max-w-xs" /><br></br>
            <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
            <br></br>
            <button className='btn'>Send Message</button>




        </div>
    );
};

export default Contact;