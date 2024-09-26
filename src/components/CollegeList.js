// components/CollegeList.js

import React, { useState, useEffect } from 'react';
import { getAllColleges } from '../services/collegeService';

const CollegeList = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllColleges()
            .then((response) => {
                setColleges(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error fetching college data");
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Colleges and Courses</h2>
            {colleges.length === 0 ? (
                <div>No colleges found.</div>
            ) : (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>College Name</th>
                            <th>Course Name</th>
                            <th>Course Fee</th>
                            <th>Course Duration</th>
                            <th>Accommodation</th>
                            <th>Accommodation Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colleges.map((college, index) => (
                            <tr key={index}>
                                <td>{college.collegeName}</td>
                                <td>{college.courseName}</td>
                                <td>{college.courseFee}</td>
                                <td>{college.courseDuration}</td>
                                <td>{college.accommodation}</td>
                                <td>{college.accommodationFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CollegeList;
