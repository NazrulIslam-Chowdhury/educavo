import React, { useContext } from 'react';
import { CoursesContext } from '../../contexts/UserContext';
import CourseTitle from '../courseTitle/CourseTitle';


const LeftSideBar = () => {
    const { courses } = useContext(CoursesContext);
    console.log(courses[0])
    return (
        <div className='text-white bg-gradient-to-tr from-slate-500 p-5 mt-5 ml-5 rounded'>
            {
                courses.map(course => <CourseTitle course={course} key={course.id}></CourseTitle>)
            }
        </div>
    );
};

export default LeftSideBar;