import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';


const Main = () => {
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
            <Outlet></Outlet>
        </div>
    );
};

export default Main;