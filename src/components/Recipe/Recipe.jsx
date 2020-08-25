import React from 'react'
import styles from './Recipe.module.css'
import { Pie } from 'react-chartjs-2';

export const Recipe = ({calories,label,image,ingredients,totalNutrients}) => {
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
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{label}</h1>
            <div className={styles.content}> 
                <div className={styles.data}>
                    <h1>Calories : {Number((calories).toFixed(2))}</h1>
                    <img src={image} className={styles.image} alt={label}/>
                    <h3 className={styles.ingredient}>Ingredients</h3>
                    <ol className={styles.list}>
                        {ingredients.map(ingredient=><li key={ingredients.indexOf(ingredient)}>{ingredient.text}</li>)}
                    </ol> 
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