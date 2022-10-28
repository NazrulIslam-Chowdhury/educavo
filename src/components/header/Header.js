import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { themeChange } from 'theme-change';
import { AuthContext } from '../../authprovider/AuthProvider';
import img from './../../logo.png';
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {
    // useEffect(() => {
    //     themeChange(false)
    // }, [])
    const { user, logOut } = useContext(AuthContext);
    const [error, setError] = useState();
    const [isDarkMode, setDarkMode] = useState(true);



    const handleTheme = () => {
        setDarkMode(!isDarkMode)
    }

    const logOutOnClick = () => {
        logOut()
            .then(() => {
                toast.success("Goodbye! 'Captain")
            })
            .catch(() => {
                toast.error("Oops! something wrong 'Captain'");
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center normal-case text-3xl font-bold"><img src={img} className="h-16 w-16" alt='' />ducavo</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-lg font-semibold text-gray-500">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                    </ul>

                </div>

                <div className="navbar-end">

                    <div onClick={handleTheme} className='mr-1'>
                        {isDarkMode ? (
                            <button className='bg-black text-white p-2 rounded-full' data-set-theme="dark" data-act-class="ACTIVECLASs">
                                <FaMoon />
                            </button>
                        ) : (
                            <button className='bg-gray-600 text-white p-2 rounded-full' data-set-theme="pink" data-act-class="ACTIVECLASS">
                                <FaSun />
                            </button>
                        )}
                    </div>
                    <div className="tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>
                        <img className='w-10 h-10 rounded-full border-none mr-1' src={user?.photoURL} alt="" />
                    </div>


                    {
                        user?.uid ?
                            <button onClick={logOutOnClick} className='btn'>Log Out</button>
                            :
                            <Link to='/login' className="btn">Login</Link>
                    }
                    <Toaster position="top-center"
                        reverseOrder={false} />
                </div>
            </div>
        </div>
    );
};

export default Header;