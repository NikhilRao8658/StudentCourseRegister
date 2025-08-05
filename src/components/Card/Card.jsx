import PropTypes from 'prop-types';
import { IoBookOutline } from "react-icons/io5";
import { useState } from 'react';
import { BiBorderAll, BiBorderOuter } from 'react-icons/bi';

const Card = ({ card, handleAsideTitle, onUpdate, handleDelete }) => {
    const { id, name, description, photo, price, courseOffering } = card;
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleUpdate = () => {
        if (!newName.trim() !== '') {
            onUpdate(id, newName);
            setIsEditing(true);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="card w-full lg:w-80 min-h-[440px] bg-base-100 shadow-xl flex flex-col justify-between">
            <figure className="px-10 pt-10 h-40 flex items-center justify-center">
                <img src={photo} alt={name} className="max-h-full object-contain" />
            </figure>

            <div className="text-center px-5 pt-4 " >
                {isEditing ? (
                    <input
                        type="text"
                        value={newName}
                        className="border rounded p-1 text-center"
                        onChange={(e) => setNewName(e.target.value)}
                        style={{border:" 2px solid green"}}
                    />
                ) : (
                    <h2 className="card-title">{name}</h2>
                )}
                <p>{description}</p>
            </div>

            <div className="flex justify-between px-5 py-5">
                <p>Price: ₹{price}</p>
                <p className="flex gap-1 items-center"><IoBookOutline />Offer ₹{courseOffering}</p>
            </div>

            <div className="px-4 m-4 flex flex-col gap-2">
                <button
                    onClick={() => handleAsideTitle(name, courseOffering, price)}
                    className="text-xl w-full h-10 rounded-xl text-white bg-[#2F80ED] overflow-hidden relative z-10 group hover:text-sky-900 duration-700"
                >
                    Select
                    {/* your existing span animations here */}
                </button>

                <button
                    onClick={() => handleDelete(card.id)}
                    className="text-xl w-full h-10 rounded-xl text-white bg-red-600 hover:bg-red-700 duration-300"
                >
                    Delete
                </button>

                <button
                    onClick={handleUpdate}
                    className="text-xl w-full h-10 rounded-xl text-white bg-green-600 hover:bg-green-700 duration-300"
                >
                    Update
                </button>

            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAsideTitle: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Card;
