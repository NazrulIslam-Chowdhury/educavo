import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = ({ detail }) => {
    // console.log(detail)
    const { img, title, _id, course_details } = detail

    return (
        <div>

            {/* <Link to={`/details/${detail.course_id}`}> */}
            <div className="card card-compact bg-gradient-to-tr from-slate-500 w-96 shadow-xl">
                <figure><img className='h-96 w-auto' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {course_details.length >= 100 ? (
                            <>
                                {course_details.slice(0, 100) + '...'}
                                <Link to={`/course/${_id}`} className='text-indigo-500'>&nbsp;Read More</Link>
                            </>
                        ) :
                            (
                                <>{course_details}</>
                            )
                        }
                    </p>
                    <Link to={`/course/${_id}`} className='btn btn-primary'>Learn More</Link>
                </div>
            </div>

            {/* </Link> */}
        </div>
    );
};

export default CoursesCard;