import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesCard from '../coursescard/CoursesCard';
import CourseTitle from '../courseTitle/CourseTitle';




const Courses = () => {
    const courseDetails = useLoaderData()
    return (
        <div>

            <div className=' flex gap-10'>
                <div className='text-white bg-gradient-to-tr from-slate-500 hidden lg:block  p-5 mt-5 ml-5 rounded'>
                    <CourseTitle />

                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5
                gap-y-14 mt-5'>

                    {
                        courseDetails.map(detail => <CoursesCard key={detail.course_id} detail={detail}></CoursesCard>)
                    }

                </div>
            </div>

        </div >
    );
};

export default Courses;