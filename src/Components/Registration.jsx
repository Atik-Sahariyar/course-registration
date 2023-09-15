import PropTypes from 'prop-types'
const Registration = ({registration}) => {
    return (
    <div>
        <ol className= " list-disc pl-4">
            <li className="text-gray-500 list-item">{registration.title}</li>
        </ol>
    </div>
    );
};

Registration.propTypes = {
    registration: PropTypes.object
}

export default Registration;