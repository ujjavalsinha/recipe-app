import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import { fetchRecipes } from './api'
import {Recipe } from './components/Recipe/Recipe';

function App() {
  const [ recipes, setRecipes ] = useState([])
  const [ dish, setDish ] = useState('')
  const [ query, setQuery ] = useState('')
  

  useEffect(()=>{
    
    const fetchApi = async () =>{
      console.log("Query inside useEffect : ",query)
      setRecipes(await fetchRecipes(query));

    }
    fetchApi();
    
  },[query])
  

  const handleInput=(dishName)=>{
    setDish(dishName);
  }
  
  const handleSearch = (e) =>{
    e.preventDefault();
    
    setQuery(dish)
    setDish('');
 }

  return (
    <div className={styles.container}>
      <form className={styles.search_form}>
        <input type='text' className={styles.search_bar} value={dish} onChange={(e)=>handleInput(e.target.value)}/>
        <button className={styles.search_button} onClick={(e)=>handleSearch(e)}>Search</button>
      </form>
        {
        query!=='' ? 
        recipes.map(recipe => 
        <Recipe 
        key = {recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        label={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        totalNutrients = {recipe.recipe.totalNutrients}
        />) 
        : <h1 className={styles.heading}>Search For Recipes</h1>
      }
    </div>
  );
}

export default App;
