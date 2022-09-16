import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const OneHero = () => {
    const [oneHero, setOneHero] = useState({})
    const {id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/hero/${id}`)
        .then(response => {
            console.log(response)
            setOneHero(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id]);

    return (
        <div className="container">
            <Link className='btn btn-primary' to="/hero/new">Add Hero</Link> 
            <Link className='btn btn-success' to="/">Home</Link>
            <p>Hero Name: {oneHero.name}</p>
            <p>Hero Rating: {oneHero.rating}</p>
            <p>Hero image: <img className='SuperImg' src={oneHero.img} alt="hero image"/></p>
        </div>
    )
}



export default OneHero;