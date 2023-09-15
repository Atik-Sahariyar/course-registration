import { useEffect, useState} from "react";
import PropTypes  from "prop-types";
import Course from "./Course";

const Courses = ({handleRegistration}) => {    
  const [courses, setCourses ] = useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
     <div className="flex items-center justify-center">
           <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-14">
          {
            courses.map(course => <Course
            key={course.id}
            course={course}
            handleRegistration={handleRegistration}
            isClicked={false}></Course>)
          }
        </div>
     </div>
    );
};
Courses.propTypes = {
  handleRegistration: PropTypes.func
}

export default Courses;