import React from 'react'
import './Product.css'

function Product(props) {
  let { price, title, thumbnail, brand, rating, stock } = props.product;

  return (
    <div className='product'>
      <img src={thumbnail}></img>
      <div className="product-info">
        <h3>Name: {title}</h3>
        <strong>Price: ${price}</strong>
        <p>Brand: {brand}</p>
        <b>Ratings: {rating}</b>
        <small>Stock: {stock}</small>
      </div>
      <button onClick={()=>props.addToCart(props.product)} className="btn">
        <p>Add to cart</p>
      </button>
    </div>
  )
}

export default Product