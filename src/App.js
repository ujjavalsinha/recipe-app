import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import { fetchRecipes } from './api'
import {Recipe } from './components/Recipe/Recipe';
import food from './images/transparent.png'
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
      <a href='#'><h2 className={styles.home}>Home</h2></a>
      <div className={styles.main}>
        <div className={styles.search_form}>
          <input type='text' className={styles.search_bar} value={dish} onChange={(e)=>handleInput(e.target.value)}/>
          {/* <button className={styles.search_button} onClick={(e)=>handleSearch(e)}>Search</button> */}
          <i className="fa fa-search search_button" aria-hidden="true" onClick={(e)=>handleSearch(e)}></i>
        </div>
          {
          query!=='' ? 
          recipes.map(recipe => 
          <div className={styles.main}> 
          <Recipe 
          key = {recipe.recipe.label}
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          label={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          totalNutrients = {recipe.recipe.totalNutrients}
          />
          </div>) 
          : 
          <section>
            <div className={styles.welcome}>
              <h1 className={styles.heading}>Search For Recipes</h1>
              <p>“One cannot think well, love well, sleep well, if one has not dined well.”</p>
              <p>― Virginia Woolf, A Room of One's Own</p>
            </div>
            <div className={styles.cover}>
              
            </div>
          </section>
        }
        </div>
    </div>
  );
}

export default App;
