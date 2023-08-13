import React from 'react'
import './Product.css'

function Product(props) {
  console.log(props.product)
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
      <button className="btn">Add to cart</button>
    </div>
  )
}

export default Product