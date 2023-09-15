import Registration from "./Registration";

const Registrations = (props) => {
    const {registrations, totalCredit, remaining, totalPrice} = props;
  
    // const selectedCourse = props.registrations
    return (
        <div className=" rounded-lg bg-white p-3 mr-6">
            <h5 className=" text-blue-600 font-semibold ">Credit Hour Remaining {remaining} hr</h5>
            <div className="border-y-[2px] my-2 py-2">
            <h3 className="text-lg font-semibold mb-1">Course Name</h3> 
            {
               registrations.map(registration => (
                
               <Registration key={registration.id} registration={registration}></Registration>))
            }
            </div>
            <h5 className="border-b-[2px] py-2 mb-2">Total Credit Hour: {totalCredit}</h5>
            <h5>Total price: {totalPrice} USD</h5>
        </div>
    );
};

export default Registrations;