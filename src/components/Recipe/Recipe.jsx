import React from 'react'
import styles from './Recipe.module.css'
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types'
import recipeBook from '../../images/recipe-book.svg'
export const Recipe = ({calories,index,label,image,ingredients,totalNutrients}) => {
    const data = {
        labels :[ 'Carbs', 'Fats','Protein'],
        datasets : [{
            data : [totalNutrients.CHOCDF.quantity,totalNutrients.FAT.quantity,totalNutrients.PROCNT.quantity],
            backgroundColor :[
                '#FF6384','#36A2EB','#FFCE56'
            ],
            hoverBackgroundColor :[
                '#FF6384','#36A2EB','#FFCE56'
            ]
        }]
    }
    let separator = null 
    if(index===0){
        separator = null
    }
    else{
        separator = (
            <div className={styles.separator}></div>
        )
    }
    return (
        <div className={styles.container}>
            {/* {separator} */}
            <h1 className={styles.heading}>{label}</h1>
            <div className={styles.content}> 
                <div className={styles.data}>
                    <p className={styles.calories}>Calories : {Number((calories).toFixed(2))}</p>
                    <img src={image} className={styles.image} alt={label}/>
                    <div className={styles.ingredientsList}>
                        <img src={recipeBook} alt='recipe'/>
                        <p className={styles.ingredient}>Ingredients</p>
                        <ol className={styles.list}>
                            {ingredients.map(ingredient=><li key={ingredients.indexOf(ingredient)}>{ingredient.text}</li>)}
                        </ol> 
                    </div>
                    
                </div>
                <div className={styles.chart}>
                    {/* <h1>Macros Distribution</h1>
                    <Pie 
                    className={styles.piechart}
                    data={data}
                    height={200}
                    options={{ maintainAspectRatio: false }}/> */}
                </div>
            </div>
            
            
        </div>
    )
}

