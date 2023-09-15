
const Registration = ({registration}) => {
    console.log(registration);
    return (
    <div>
        <ol className= "list-decimal pl-3">
            <li className="text-gray-500 list-item">{registration.title}</li>
        </ol>
    </div>
    );
};

export default Registration;