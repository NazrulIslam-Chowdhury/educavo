import React from 'react';
import { FaPrint, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';



const Details = () => {
    const cardDetail = useLoaderData();
    return (
        <div>
            <div className="tooltip tooltip-right tooltip-success font-semibold" data-tip="Click to Download pdf">
                <button className=' text-success' onClick={() => window.print()}><FaPrint className='ml-10 w-10 h-10 mt-4' /></button>
            </div>


            <div className='text-white bg-gradient-to-tr from-slate-500 m-10 p-4 rounded' >
                <div className='bg-gradient-to-tr from-slate-700 lg:flex md:flex gap-5 rounded-lg p-2'>
                    <img src={cardDetail.img} className='h-80 rounded-lg' alt="" />
                    <div className='space-y-4 mt-4'>
                        <p>Students: {cardDetail.students}</p>
                        <p>Duration: {cardDetail.course_duration} mins</p>
                        <p className='flex gap-2 items-center'>Ratings: <FaStar className='text-amber-500' /> {cardDetail.ratings}</p>
                        <Link to={''} className='btn btn-primary mt-4 px-6'>More Info</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-gray-200 text-center text-lg font-bold mt-2'>{cardDetail.title}</h1>
                    <p className='text-gray-200 mt-2'>{cardDetail.course_details}</p>
                    <Link to={`/checkout/${cardDetail.id}`} className='btn btn-primary mt-4 px-6'>Get Premium Access</Link>
                    <Link to='/courses' className='btn btn-primary mt-4 px-6 ml-4'>Return</Link>
                </div>
            </div>
        </div>


    );
};

export default Details;