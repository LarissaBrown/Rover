import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return(
        <div style={{ padding: 20 }}>
            <h1>Home View</h1>
            <p>Lorem Ipsum stuff here</p>
            <button onClick={()=> navigate("/products")}> Go to Products Page </button>
            <button onClick={()=> navigate(-1)}> Go Back One </button>
            <button onClick={()=> navigate(1)}> Go Forward One </button>
            <button onClick={()=> navigate(2)}> Go Forward Two </button>
            
        </div>
    )
}