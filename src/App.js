import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import { fetchRecipes } from './api'
import {Recipe } from './components/Recipe/Recipe';
import food from './images/transparent.png'
import spinner from './images/spinner.svg'
import withClass from './hoc/withClass.js'
import Auxiliary from './hoc/Auxiliary.js'
import PropTypes from 'prop-types'

function App() {
  const [ recipes, setRecipes ] = useState(['first'])
  const [ dish, setDish ] = useState('')
  const [ query, setQuery ] = useState('')
  
  

  useEffect(()=>{
    setRecipes(['first'])
    const fetchApi = async () =>{
      console.log("Query inside useEffect : ",query)
      setRecipes(await fetchRecipes(query));

    }
    if(query !== ''){
    fetchApi();
    }
  },[query])
  

  const handleInput=(dishName)=>{
    setDish(dishName);
  }
  
  const handleSearch = (e) =>{
    e.preventDefault();
    
    setQuery(dish)
    setDish('');
 }
 
 console.log("RECIPESSSS : ",recipes)
 console.log("QUERY : ",query);
  let noRecipe = (
        query !=='' && recipes.length === 0
        ?
        <div>
          <h1 className={styles.norecipes}>No Recipes Found</h1>
        </div>
        :
        null
      )
 
  const recipeReset = () =>{
    setDish('')
    setQuery('')
    setRecipes([])
  }
  return (
    <Auxiliary>
      <a onClick={recipeReset} href='#'><p className={styles.home}>Home</p></a>
      <div className={styles.main}>
        <div className={styles.search_form}>
          <input type='text' className={styles.search_bar} value={dish} onChange={(e)=>handleInput(e.target.value)}/>
          {/* <button className={styles.search_button} onClick={(e)=>handleSearch(e)}>Search</button> */}
          <i className="fa fa-search search_button" aria-hidden="true" onClick={(e)=>handleSearch(e)}></i>
        
        </div>
        {noRecipe}
          {
          query!=='' ? 
            recipes[0]!=='first' ?
              <div>
              {recipes.map((recipe,index) =>
              <Recipe 
              key = {recipe.recipe.label}
              index= {index}
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image} 
              label={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              totalNutrients = {recipe.recipe.totalNutrients}
              />)}
              </div>
              : <div className={styles.preloader}>
                    <img src={spinner} alt="spinner"/>
                </div>
          
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
    </Auxiliary>
  );
}

App.propTypes = {
  recipes : PropTypes.array,
  dish : PropTypes.string,
  query : PropTypes.string
}
export default withClass(App,styles.container);
