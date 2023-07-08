import React, { useState } from 'react'

import "./css/resturantDetails.css"
import { NavLink, useParams } from 'react-router-dom'
import { useResturantContext } from '../context/ResturantContext';
import ReviewCard from '../component/ReviewCard';

import {AiOutlineArrowLeft} from "react-icons/ai";
import { ReviewModal } from '../component/ReviewModal';

export  function ResturantDetails() {
    const {resturantId}=useParams();
    const {state,dispatch}=useResturantContext();
    const resturant=state.resturants.find(({id})=>id===Number(resturantId));

    const [show,setShow]=useState(false);

   const onClose=()=>{
    setShow(false);
   }
   const onOpen=()=>{
    setShow(true);
   }
  return (
    <div className='resturantDetails'>
        {show && <ReviewModal onClose={onClose} resturantId={resturant.id}/>}
        <NavLink to={"/"} className="backIcon">
            <AiOutlineArrowLeft/>
        </NavLink>

      <div className="details-container">
       <div className="details">
        <h1>{resturant.name}</h1>
        {
            resturant.menu.map((item)=>(
                <span key={item.id}>{item.name}</span>
            ))
        }
        <p>{resturant.address}</p>
        <p>{resturant.phone}</p>
        <p>Average Ratings: {resturant.averageRating}</p>
       </div>
       <button onClick={onOpen}>Add Review</button>
      
      </div>
      <div className="line"></div>

      <div className="reviews-container">
        <h1>Reviews</h1>
        {
            resturant.ratings.map((review)=>(
                <div className="review" key={review.id}>
                    <ReviewCard review={review}/>
                </div>
            ))
        }
      </div>
     
    </div>
  )
}
