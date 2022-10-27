import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseTitle = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('https://educavo-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setTitles(data))
    }, [])


    return (
        <div className='mt-2'>
            <h1 className='text-xl text-center'>Courses</h1>
            {
                titles.map(title =>
                    <ul className='list-disc ml-2 mt-3' key={title.id}>
                        <li>
                            <Link to={`/course/${title.id}`}>{title.title}</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    );
};

export default CourseTitle;