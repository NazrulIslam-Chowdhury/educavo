import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CoursesContext } from '../../contexts/UserContext';
import Header from '../header/Header';



const Courses = () => {
    // const { courses } = useContext(CoursesContext);
    const courses = useLoaderData();
    console.log(courses)
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
            <div className=' flex gap-10'>
                <div className='text-white bg-gradient-to-tr from-slate-500 hidden lg:block  p-5 mt-5 ml-5 rounded'>

                    {
                        courses.map(course => <Link to={`/courses/${course.id}`}><p>{course.title}</p></Link>)
                    }
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5
                gap-y-14 mt-5'>
                    {
                        courses.map(course =>

                            <Link to={`/courses/${course.id}`}>
                                <div className="card card-compact bg-gradient-to-tr from-slate-500 w-96 shadow-xl">
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