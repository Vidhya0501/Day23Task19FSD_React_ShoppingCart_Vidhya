import React, { useState } from 'react'


function Card({product,handleCart}) {

 const [buttonText,setButtonText]=useState("Add to cart");

 const handleClick=()=>{
  if(buttonText==="Add to cart"){
   handleCart(1);
    setButtonText("Remove from cart")
  }else{
    handleCart(-1);
    setButtonText("Add to cart")
  }
 };

  return (  
    
    <div className='col wrapper mb-5'>
        <div className="card" style={{width: "16rem"}}>
            <div className='image'>
            <img src={product.image} className="card-img-top" alt="product-image"/>
            <span className='badge top bg-dark text-white ms-1 rounded-spill'>sale</span>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold">{`₹${product.price}`}</p>
                <button className='btn btn-warning' onClick={handleClick}>{buttonText}</button>
            </div>
        </div>
    </div>
  )
}

export default Card