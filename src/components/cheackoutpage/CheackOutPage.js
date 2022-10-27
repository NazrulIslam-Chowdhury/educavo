import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheackOutPage = () => {
    const checkPage = useLoaderData();
    console.log(checkPage)
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 gap-10 mt-20'>
            <div>
                <h1 className='text-gray-200  text-4xl text-center'>$ {checkPage.price}/month</h1>
                <div className='bg-gradient-to-tr from-slate-500 bg-cover text-gray-200 p-4 mt-4 rounded-md'>
                    <ul className='list-disc ml-4 space-y-10'>
                        <li>Get latest info.</li>
                        <li>Use 2 accounts.</li>
                        <li>See our special videos.</li>
                        <li>Download.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-gray-200 text-4xl text-center'>$ {checkPage.price}/2 month</h1>
                <div className='bg-gradient-to-tr from-slate-500 text-gray-200 p-4 mt-4 rounded-md'>
                    <ul className='list-disc ml-4 space-y-10'>
                        <li>Get latest info</li>
                        <li>Use 3 accounts</li>
                        <li>Get help from our instructors.</li>
                        <li>Download.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CheackOutPage;