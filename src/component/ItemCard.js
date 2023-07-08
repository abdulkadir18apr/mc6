import React from 'react'
import { NavLink } from 'react-router-dom'

export function ItemCard({item}) {
  return (
    <NavLink to={`${item.resturantId}`}>
    <div className="w-[300px] rounded-md border">
      <img
        src={item.imgSrc}
        alt="food"
        className="h-[300px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <p className="mt-3 text-sm text-gray-400">
         Rs. {item.price} for one
        </p>
        <p className="mt-3 text-sm text-gray-400">
       {item.resturant}
        </p>
       
      </div>
    </div>
    </NavLink>
  )
}
