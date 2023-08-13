import React, { useEffect, useState } from 'react'
import Product from './Product/Product'
import './Products.css'

function Products() {
    let [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(products => setProducts(products.products))
    }, {})
    console.log(products)
    return (
        <div className="product-container">
        <div className='products'>
            {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                ></Product>)
            }
        </div>
        </div>
    )
}

export default Products