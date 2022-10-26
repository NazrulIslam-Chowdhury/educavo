import React from 'react';
import Header from '../header/Header';
import LeftSideBar from '../leftsidebar/LeftSideBar';

const Courses = () => {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://images8.alphacoders.com/113/1136157.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }}>
            <Header></Header>
            <div>
                <LeftSideBar></LeftSideBar>
            </div>

        </div>
    );
};

export default Courses;