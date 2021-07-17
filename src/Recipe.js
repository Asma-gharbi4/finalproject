import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className={style.recipe}>

            <h1 className={style.Title}>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <h2>How to cook it</h2>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))
                }
            </ul>
            <p>Calories: {calories}</p>
            

        </div>

    );
}
export default Recipe;