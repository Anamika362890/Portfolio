import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCross, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const menuItems = <React.Fragment>

        <div className='text-lg '>
            <Link className='mr-10' to='/'>Home</Link>
            <Link className='mr-10' to='/about'>About Me</Link>
            <Link className='mr-10' to='/projects'>Projects</Link>
            <Link className='mr-10' to='/services'>Services</Link>
            <Link className='mr-10' to='/contact'>Contact</Link>
            <Link className='mr-10' to='/blogs'>Blogs</Link>

        </div>






    </React.Fragment>


    return (

        <div className='bg-gray-900' >

            <div className="navbar  text-white flex justify-between max-w-[1280px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">

                            <Link className='mb-5' to='/'>Home</Link>
                            <Link className='mb-5' to='/about'>About Me</Link>
                            <Link className='mb-5' to='/projects'>Projects</Link>
                            <Link className='mb-5' to='/services'>Services</Link>
                            <Link className='mb-5' to='/contact'>Contact</Link>
                            <Link className='mb-5' to='/blogs'>Blogs</Link>

                        </ul>
                    </div>





                    <Link to='/' className="btn btn-ghost normal-case text-xl">Anamika Goswami</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>

                </div>

                < a href='https://drive.google.com/file/d/1P2ubHzNzWYthkctueziOy_hZY_wTrlRa/view?usp=share_link'><button className='btn btn-success text-white'>Resume</button></a>

            </div>

        </div>


    );
};




export default NavBar;