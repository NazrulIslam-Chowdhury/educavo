import React from 'react';
import { Link } from 'react-router-dom';

const CourseTitle = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Link><p>{course.title}</p></Link>
        </div>
    );
};

export default CourseTitle;