import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Resturnt.css"

const Resturent = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])
    const clickInput = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div className="input-fild">
            <input id="input-fild-section" onChange={clickInput} placeholder="search your food" type="text" />
            <div className="card-container">
                {
                    meals.map(meal => <Card
                        key={meal.idMeal}
                        meal={meal}
                    >
                    </Card>)
                }
            </div>
        </div>

    );
};

export default Resturent;