import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const Details = () => {
    const cardDetail = useLoaderData();
    console.log(cardDetail)
    return (
        <div className='text-white bg-gradient-to-tr from-slate-500 m-10 p-4 rounded' >
            <h1 className='text-gray-200 text-center text-lg font-bold mt-2'>{cardDetail.title}</h1>
            <p className='text-gray-200 mt-2'>{cardDetail.course_details}</p>
            <Link to='/checkout' className='btn btn-primary mt-4 px-6'>Get Premium Access</Link>
        </div>
    );
};

export default Details;