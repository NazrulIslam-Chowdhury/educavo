import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const CoursesContext = createContext();
const UserContext = ({ children }) => {

    const [courses, setCourses] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const contextInfo = { courses };
    return (
        <CoursesContext.Provider value={contextInfo}>
            {children}
        </CoursesContext.Provider>
    );
};

export default UserContext;