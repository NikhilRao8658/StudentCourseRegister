import { useState, useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Courses = ({ handleAsideTitle }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    const handleUpdate = (id, newName) => {
        const updated = cards.map(card =>
            card.id === id ? { ...card, name: newName } : card
        );
        setCards(updated);
    };

    const handleDelete = (id) => {
        const filtered = cards.filter(card => card.id !== id);
        setCards(filtered);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
            {cards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    handleAsideTitle={handleAsideTitle}
                    onUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

Courses.propTypes = {
    handleAsideTitle: PropTypes.func.isRequired,
};

export default Courses;
