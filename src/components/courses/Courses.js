import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';




const Courses = () => {

    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>

            <div className=' flex gap-10'>
                <div className='text-white bg-gradient-to-tr from-slate-500 hidden lg:block  p-5 mt-5 ml-5 rounded'>

                    {
                        courses.map(course => <Link to={`/details/${course.id}`}><p key={course.id}>{course.title}</p></Link>)
                    }
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5
                gap-y-14 mt-5'>
                    {
                        courses.map(course =>

                            <Link to={`/details/${course.id}`}>
                                <div key={course.id} className="card card-compact bg-gradient-to-tr from-slate-500 w-96 shadow-xl">
                                    <figure><img className='h-96 w-auto' src={course.img} alt="" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{course.title}</h2>

                                    </div>
                                </div>
                            </Link>

                        )
                    }
                </div>
            </div>

        </div >
    );
};

export default Courses;