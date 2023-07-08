import React, { useState } from 'react'
import {FaRegCircleXmark} from "react-icons/fa6"

import "./css/reviewModal.css"
import { useResturantContext } from '../context/ResturantContext'

export  function ReviewModal({onClose,resturantId}) {


    const {dispatch}=useResturantContext();
    const [review,setReview]=useState({revName:"Abdul",pp:"https://picsum.photos/200",rating:"",comment:""})

    const handleInputChange=(e)=>{
        setReview((prev)=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleReviewSubmit=()=>{
      dispatch({type:"addReview",payload:{resturantId,review:review}})
    }
  return (
    <div className='reviewModal'>
        <div className="crossIcon">
        <FaRegCircleXmark onClick={onClose}/>
        </div>
     
        <h1>Add Your Review</h1>
        <div className="feild">
            <label htmlFor="rating">Ratings</label>
            <select onChange={handleInputChange} name='rating'>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        
        </div>
        <div className="feild">
            <label htmlFor="comment">Comments</label>
            <input type="text" name="comment" id="comment" onChange={handleInputChange} />
        </div>  
        <div className="feild">
            <button onClick={handleReviewSubmit}>Submit</button>
        </div>  
    </div>
  )
}
