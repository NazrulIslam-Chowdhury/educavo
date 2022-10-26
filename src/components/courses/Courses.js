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
            width: 'auto',
            height: 'auto',
        }}>
            <Header></Header>
            <div className="relative h-32 w-32 ...">
                <div className="absolute inset-y-0 left-0 w-16 text-white">
                    <LeftSideBar></LeftSideBar>
                </div>
            </div>

        </div>
    );
};

export default Courses;