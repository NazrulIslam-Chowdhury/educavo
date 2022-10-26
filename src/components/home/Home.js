import React from 'react';
import Header from '../header/Header';
import img from '../../logo.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://images8.alphacoders.com/113/1136157.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: 'auto',
        }}>
            <Header></Header>
            <img src={img} alt="" />
            <div className='text-gray-200 font-bold  ml-56'>
                <h1 className='text-6xl'>Educavo</h1>
                <p className='text-6xl'>Your learning companion.</p>
                <Link to='/courses'><button className='bg-slate-300 hover:bg-slate-500 text-black py-4 px-8 text-2xl font-bold rounded mt-4'>Start Learning</button></Link>
            </div>
        </div>
    );
};

export default Home;