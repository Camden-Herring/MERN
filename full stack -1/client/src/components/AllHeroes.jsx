import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllHeroes = () => {
    const [allHeroes, setAllHeroes] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/heroes")
        .then((response)=>{
            console.log(response.data.results)
            setAllHeroes(response.data.results)
        })
        .catch((err)=>{
            console.log('This is your get error: ', err)
        })
    }, [deleteToggle])

    const deleteHero = (e, id) => {
        console.log("Deleting Hero", id)
        axios.delete(`http://localhost:8000/api/hero/delete/${id}`)
            .then((response)=>{
                console.log("Delete was successful", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log("something went wrong deleting", err))
    }

    return (

        <div className='container'>
            <h1>All Heroes</h1>
            <Link className='btn btn-primary' to="/hero/new">Add Hero</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope = "col">Hero Name: </th>
                        <th scope = "col">Hero Rating: </th>
                        <th scope = "col">Hero Image: </th>
                        <th scope = "col">Action Items: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allHeroes.map((hero, i) => {
                            return (
                                <tr key = {i}>
                                    <td>{hero.name}</td>
                                    <td>{hero.rating}</td>
                                    <td><img className='SuperImg' src={hero.img} alt="super hero picture" ></img></td>
                                    <td>
                                        <Link to={`/hero/edit/${hero._id}`} className="btn btn-success">Edit</Link> | 
                                        <button onClick={(e)=>{deleteHero(e, hero._id)}} className='btn btn-danger'>Delete</button> | 
                                        <Link to={`/hero/display/${hero._id}`} className="btn btn-warning">View This Hero</Link> 
                                        </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}



export default AllHeroes;

/*
1. import {useState} from react
2. import axios
*/ 