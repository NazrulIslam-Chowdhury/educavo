import React from 'react';
import { Link } from 'react-router-dom';

const CourseTitle = ({ title }) => {
    console.log(title)
    return (
        <div className='mt-4'>
            <Link><p>{title.title}</p></Link>
        </div>
    );
};

export default CourseTitle;