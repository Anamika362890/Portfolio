import React from 'react';
import { Form } from 'react-router-dom';

const Contact = () => {
    return (

        <div className='App text-white my-20'>
            <h1 className='text-success text-4xl font-bold my-4'>Contact Me</h1>
            <p>Please do not hesitate to contact me
                , I will  try to give you my best.</p>
            <div className="badge badge-success badge-outline my-3"> <h1 className='text-lg '>Address : Dhaka,Bangladesh</h1></div> <br></br>
            <div className="badge badge-success badge-outline"> <h1 className='text-lg'>Email : Anamika362890@gmail.com</h1></div>



            <h1 className='text-3xl my-4'>OR</h1>


            <input type="text" placeholder="Enter Your Name" className=" mb-5 input input-bordered w-full max-w-xl" required /> <br></br>
            <input type="email" placeholder="Enter Your Email" className="input mb-5 input-bordered w-full max-w-xl" required /><br></br>
            <textarea className="textarea textarea-bordered w-full pb-8 max-w-xl" placeholder="Message"></textarea>
            <br></br>
            <button className='btn btn-success text-white mt-9'>Send Message</button>




        </div>
    );
};

export default Contact;