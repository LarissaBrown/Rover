import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()

    return(
        <div style={{ padding: 20 }}>
            <h1>About View</h1>
            <p>Lorem Ipsum stuff here</p>
            
            <button onClick={()=> navigate("/")}> Return to Home </button>
            <button onClick={()=> navigate(-1)}> Go Back One </button>
            <button onClick={()=> navigate(1)}> Go Forward One </button>
        </div>
    )
}