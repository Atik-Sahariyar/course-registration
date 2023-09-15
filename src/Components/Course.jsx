import { FaBook, FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Course = ({ course, handleRegistration }) => {

    const { image, title, description, price, credit } = course;
    return (
       
            <div  className=" w-80 h-[386px] bg-white p-5 rounded-xl ">
                <img src={image} alt="" />
                <h3 className=" my-2 text-lg font-semibold">{title}</h3>
                <p className="text-gray-500">{description}</p>
                <div className=' '>
                    <div className="flex gap-2 items-center mt-2 mb-2">
                        <FaDollarSign />
                        <span className="text-gray-500 mr-5">Price: {price}</span>
                        <FaBook />
                        <span className="text-gray-500 ">Credit: {credit}hr</span>
                    </div>
                    <button onClick={() => handleRegistration(course)} className="w-full bg-blue-500 rounded-xl text-white text-lg p-2">Select</button>
                </div>
            </div>
    );
};

Course.protoTypes = {
    course: PropTypes.object.isRequired,
    handleRegistration: PropTypes.func
}

export default Course;