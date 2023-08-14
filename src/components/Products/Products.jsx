import React, { useEffect, useState } from 'react'
import Product from './Product/Product'
import './Products.css'

function Products() {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    let [image, setImage] = useState([])
    let [cartText, setCartText] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(products => setProducts(products.products))
    }, [])

    let addToCart = (product) => {
        console.log(product.id)
        let updatedCart = [...cart, product];
        setCartText(product.title)
        setCart(updatedCart)
        setImage(product.thumbnail)
        // let productID = product[id];
        // let cartID = cart.product[id]
        // 
    }


    return (
        <div className="product-container">
            <div className='products'>
                {
                    products.map(product => <Product
                        product={product}
                        addToCart={addToCart}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <h3>Order samery</h3>
                <p>Cart Items: {cart.length}</p>
                <img src={image} alt="product image" />
                <p>{cartText}</p>
            </div>
        </div>
    )
}

export default Products