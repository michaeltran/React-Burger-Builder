import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
    // console.log(props.ingredients);
    // console.log(Object.keys(props.ingredients));

    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // console.log(igKey)
        // console.log(props.ingredients[igKey])
        // console.log(...Array(props.ingredients[igKey]))
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            // console.log(igKey)
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    });

    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;