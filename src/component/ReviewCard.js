import React from 'react'
import {AiOutlineStar} from "react-icons/ai"

import "./css/reviewCard.css"
export default function ReviewCard({review}) {
  return (
    <div className='reviewCard'>
        <div className="review">
            <div className="user">
                <img src={review.pp} alt="" />
                <p>{review.revName}</p>
            </div>
            <div className="comment">
                <p>{review.comment}</p>
            </div>
        </div>
        <div className="rating">
            <p>{review.rating} </p><span><AiOutlineStar/></span>
        </div>
      
    </div>
  )
}
