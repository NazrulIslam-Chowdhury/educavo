import React from 'react';
import img from '../../logo.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div >
            <img className='animate-bounce' src={img} alt="" />
            <div className='text-gray-200 font-bold ml-10 w-auto'>
                <h1 className='text-6xl '>Educavo</h1>
                <p className='text-6xl '>Your learning companion.</p>
                <Link to='/courses'><button className='bg-slate-300 hover:bg-slate-500 text-black py-4 px-8 text-2xl font-bold rounded mt-4 animate-pulse'>Start Learning</button></Link>
            </div>
        </div>
    );
};

export default Home;