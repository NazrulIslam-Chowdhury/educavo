import React from 'react';
import Header from '../header/Header';


const Home = () => {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://www.macworld.com/wp-content/uploads/2022/04/which_programming_language_to_learn.jpg?quality=50&strip=all)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }}>
            <Header></Header>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;