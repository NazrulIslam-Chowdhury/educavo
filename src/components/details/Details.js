import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../header/Header';

const Details = () => {
    const details = useLoaderData();
    console.log(details)
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
            <h1>this is details</h1>
        </div>
    );
};

export default Details;