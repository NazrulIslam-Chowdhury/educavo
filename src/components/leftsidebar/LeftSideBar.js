import React, { useContext } from 'react';
import { CoursesContext } from '../../contexts/UserContext';
import CourseTitle from '../courseTitle/CourseTitle';


const LeftSideBar = () => {
    const { courses } = useContext(CoursesContext);
    console.log(courses[0])
    return (
        <div>
            {
                courses.map(course => <CourseTitle course={course} key={course.id}></CourseTitle>)
            }
        </div>
    );
};

export default LeftSideBar;