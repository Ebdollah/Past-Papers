
import React, { useState, useEffect } from 'react';

export default function CoursesCards(props) {
    const [courseNames, setCourseNames] = useState([]);

    useEffect(() => {
        async function fetchCourseNames() {
            try {
                const response = await fetch("http://localhost:5000/api/getcourses", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await response.json();
                setCourseNames(data.courses);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCourseNames();
    }, []);
    const filteredCourses = courseNames.filter(course => {
        return course.coursename.toLowerCase().includes(props.search.toLowerCase());
    });
    return (
        <>
           {filteredCourses.map((course, index) => (
                <a
                    key={index}
                    href="/"
                    className="w-28 md:w-auto mx-1 lg:mx-0 block mb-2 p-2 h-10 md:h-auto border-0 md:p-3 bg-indigo-50 rounded-lg shadow hover:bg-white duration-300 hover:shadow-md"
                >
                    <h5 className="text-sm truncate">{course.coursename}</h5>
                </a>
            ))}
        </>
    )
}
