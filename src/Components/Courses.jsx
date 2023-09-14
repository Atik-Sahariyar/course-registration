import { useEffect, useState } from "react";
import Course from "./Course";
const Courses = () => {
    const [courses, setCourses ] = useState([]);
    console.log(courses)
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
      <div>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 mx-8 lg:mx-14">
          {
            courses.map(course => <Course
            key={course.id}
            course={course}></Course>)
          }
        </div>
        <div>
            
        </div>
      </div>
    );
};

export default Courses;