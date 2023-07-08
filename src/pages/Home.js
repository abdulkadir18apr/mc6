import React from 'react'

import "./css/home.css"
import { useResturantContext } from '../context/ResturantContext'
import { ItemCard } from '../component/ItemCard';


export function Home() {
    const {state,selectedResturants,dispatch}=useResturantContext();
    const {cuisine}=state;
    console.log(selectedResturants);

    const selectCuisineHandler=(e)=>{
        dispatch({type:"setCuisine",payload:Number(e.target.value)})

    }
  return (
    <div className='home'>
      <h1>Food Ordering App</h1>
      <h3>Select Your Cuisine:</h3>
      <div className="menu">
        {
            cuisine.map(({name,id})=>(
                <button key={id} value={id} onClick={selectCuisineHandler}>{name}</button>
            ))
        }
      </div>

      <div className="resturant-container">
       {
        selectedResturants.map((resturant)=>(
            <div className="resturant">
                 <h1>Dishes By {resturant.name}</h1>
                <div className="menu-container">
              
                    {
                        resturant.menu.map((item)=>(
                            <div className="item">
                                <ItemCard item={{...item,resturant:resturant.name,resturantId:resturant.id}}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
       }
      </div>
    

    </div>
  )
}
