import React from 'react';
import { Link } from 'react-router-dom';

const CourseTitle = ({ course }) => {
    console.log(course)
    return (
        <div className='mt-4'>
            <Link><p>{course.title}</p></Link>
        </div>
    );
};

export default CourseTitle;