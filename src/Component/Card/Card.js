import React from 'react';
import "./Card.css"

const Card = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;
    return (
        <div className="card-container-fix">
            <h2>Name: {strMeal}</h2>
            <img src={strMealThumb} alt="" />
            <p>{strInstructions.slice(0, 100)}</p>

        </div>
    );
};

export default Card;