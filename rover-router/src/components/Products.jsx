import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import productData from './productData.json'

export default function Products() {

    const navigate = useNavigate()

    const products = productData.map(product => (

        <h3 key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price}
        </h3>

    ))


    return(
        <div style={{ padding: 20 }}>
            <h1>Products - 2</h1>
            <p>Lorem Ipsum stuff here</p>

            <button onClick={() => navigate("/checkout")}> Go to CheckoutPage </button>
            <button onClick={() => navigate("/")}> Return to Home </button>
            <button onClick={() => navigate(1)}> Go Forward One </button>
            <button onClick={() => navigate(-1)}> Go Back One </button>
            <div>
                <h1>Products List Page</h1>
                {products}
            </div>
        </div>
    )
}