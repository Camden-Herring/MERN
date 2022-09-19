import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const OnePet = () => {

    const [onePet, setOnePet] = useState({})
    const {id} = useParams();
    const [deleteToggle, setDeleteToggle] = useState(false)
    const navigate = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(response => {
            console.log(response)
            setOnePet(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id]);

    const deletePet = (e, id) => {
        console.log("Deleting Hero", id)
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then((response)=>{
                console.log("Delete was successful", response)
                setDeleteToggle(!deleteToggle)
                navigate("/")
            })
            .catch(err => console.log("something went wrong deleting", err))
    }

    return (
        <div className='container'>
            <Link className='btn btn-primary' to="/pet/new">Add Pet</Link> | 
            | <Link className='btn btn-success' to="/">Home</Link> | 
            | <Link className='btn btn-warning' to={`/pet/update/${onePet._id}`}>Update Pet</Link> | 
            | <button onClick={(e)=>{deletePet(e, onePet._id)}} className='btn btn-danger'>Adopt This Pet!</button>
            
        <h3>Viewing Pet: {onePet.name}</h3>
        <p>Pet Name: {onePet.name}</p>
        <p>Pet Type: {onePet.type}</p>
        <p>Pet Description: {onePet.description}</p>
        <p>Pet Skill One: {onePet.skillone}</p>
        <p>Pet Skill Two: {onePet.skilltwo}</p>
        <p>Pet Skill Three: {onePet.skillthree}</p>

        </div>
    )
}

export default OnePet