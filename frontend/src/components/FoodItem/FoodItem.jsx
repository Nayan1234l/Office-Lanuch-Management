import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = ({ id, name, description, image }) => {

    const [itemCount,setItemCount]=useState(0)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {
                    !itemCount?
                    <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon}/>
                    : <div className='food-item-counter'>
                       <img  onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                       <p>{itemCount}</p>
                       <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">{description}</p>
        </div>
    )
}

export default FoodItem