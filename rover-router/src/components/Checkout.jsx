import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
    const navigate = useNavigate()

    return(
        <div style={{ padding: 20 }}>
            <h1>Checkout View</h1>
            <p>Lorem Ipsum stuff here</p>
            
            <button onClick={()=> navigate("/")}> Return to Home </button>
            <button onClick={()=> navigate(-1)}> Go Back One </button>
            <button onClick={()=> navigate(-2)}> Go Back Two </button>
        </div>
    )
}