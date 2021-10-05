import React from 'react';
import "./Card.css"

const Card = (props) => {
    const { strMealThumb, strMeal } = props.meal;
    return (
        <div className="card-container-fix">
            <h2>Name: {strMeal}</h2>
            <img src={strMealThumb} alt="" />

        </div>
    );
};

export default Card;