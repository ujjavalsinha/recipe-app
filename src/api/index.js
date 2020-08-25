import axios from 'axios'
const app_key = '74bd28ba236f48fb0e1a8fd31558de16'
const app_id = '609f181f'

export const fetchRecipes = async (dishName) => {
    try {
        if(dishName===''){
            return []
        }
        else{
            console.log("DISHNAME :",dishName)
            const { data : {hits} }= await axios.get(`https://api.edamam.com/search?q=${dishName}&app_id=${app_id}&app_key=${app_key}`)
            console.log("HITS : ",hits)
            return hits
        }
    } catch (error) {
        console.log(`Something is wrong`)
    }
}    