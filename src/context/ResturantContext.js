import { createContext, useContext, useReducer } from "react";
import { cuisineData, restaurantsData } from "../data/ResturantData";

export const ResturantContext=createContext();

export const ResturantProvider=({children})=>{

    const [state,dispatch]=useReducer(ResturantReducer,{
        cuisine:[...cuisineData],
        resturants:[...restaurantsData],
        currCuisineId:-1
    })

    const selectedResturants=filteredResturant([...state.resturants],state.currCuisineId);

     
    return(
        <ResturantContext.Provider value={{state,dispatch,selectedResturants}}>
            {children}
        </ResturantContext.Provider>
    )
}

export const useResturantContext=()=>useContext(ResturantContext);

//reducer

const ResturantReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){

        case "setCuisine":
            return {
                ...state,
                currCuisineId:payload
            }
        case "addReview":
            return {
                ...state,resturants:[...state.resturants.map((resturant)=>resturant.id===payload.resturantId?{...resturant,ratings:[...resturant.ratings,payload.review],averageRating:((resturant.averageRating*resturant.ratings.length) +  Number(payload.review.rating))/(resturant.ratings.length+1)  }:resturant)]
            }
        
        default:
            return state
    }

}

const filteredResturant=(resturants,cuisineId)=>{
    if(cuisineId===-1){
        return []
    }
    return resturants.filter(({cuisine_id})=>cuisine_id===cuisineId)

}