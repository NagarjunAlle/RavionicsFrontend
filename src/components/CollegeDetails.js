import React from 'react';

const CollegeDetails = ({ college }) => {
    if (!college) return <div>Loading...</div>;

    return (
        <div>
            <h2>{college.name}</h2>
            <p>Accommodation: {college.accommodation}</p>
            <p>Accommodation Fee: {college.accommodationFee}</p>

            <h3>Courses</h3>
            <ul>
                {college.courses.map(course => (
                    <li key={course.id}>
                        {course.name} - Duration: {course.duration} months, Course Fee: {course.courseFee}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeDetails;
