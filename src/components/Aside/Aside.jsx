import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Aside = ({ asidetitle, credit, price, }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white p-5 rounded-lg space-y-3">
            {/* <h1 className="text-[#2F80ED] font-bold text-lg border-b-2 pb-5">Credit Hour Remaining: {creditOnly} hr</h1> */}
            <button className="bg-[#2F80ED] text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition" onClick={() => navigate('/newRegister')}>
                New Register Here
            </button><br />
            <button className="bg-[#2F80ED] text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition" onClick={() => navigate('/newCourse')}>
                Create New Course
            </button>
            


            <h1 className="font-bold text-xl py-5 border-b-2">Course Name List</h1>
            {
                asidetitle.map((title, idx) => (
                    <div key={idx} className='py-2'>
                        <li>{title}</li>
                    </div>
                ))
            }
            <p className="text-md font-bold py-5 border-b-2 "> Original Price: {price} </p>
            <p className="text-lg font-bold py-5 border-b-2">Total Price Including Offer : {credit} </p>
        </div>
    );
};

Aside.propTypes = {
    asidetitle: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired,
    price: PropTypes.object.isRequired,
    creditOnly: PropTypes.object.isRequired
};

export default Aside;
