import Registration from "./Registration";
import PropTypes from 'prop-types';

const Registrations = (props) => {
    const { registrations, totalCredit, remaining, totalPrice } = props;
    return (
        <div className="flex justify-center">
            <div className=" rounded-lg bg-white p-3 mr-5">
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
        </div>
    );
};
Registrations.propTypes = {
     registrations: PropTypes.array,
     totalCredit: PropTypes.number,
     remaining: PropTypes.number,
     totalPrice: PropTypes.number
}
export default Registrations;