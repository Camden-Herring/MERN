import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllPets = () => {

    const [allPets, setAllPets] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then((response)=>{
            console.log(response.data.results)
            setAllPets(response.data.results)
        })
        .catch((err)=>{
            console.log('This is your get error: ', err)
        })
    }, [deleteToggle])

    const deletePet = (e, id) => {
        console.log("Deleting Hero", id)
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then((response)=>{
                console.log("Delete was successful", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log("something went wrong deleting", err))
    }

    return (
        <div className='container'>
            <h1>All Pets</h1>
            <Link className='btn btn-primary' to="/pet/new">Add Pet to the Shelter</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope = "col">Pet Name: </th>
                        <th scope = "col">Pet Type: </th>
                        <th scope = "col">Pet Description: </th>
                        <th scope = "col">Pet Actions: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map((p, i) => {
                            return (
                                <tr key = {i}>
                                    <td>{p.name}</td>
                                    <td>{p.type}</td>
                                    <td>{p.description}</td>
                                    <td>
                                        <Link className='btn btn-success' to={`/pet/display/${p._id}`}>View Pet</Link> | 
                                        | <Link className='btn btn-warning' to={`/pet/update/${p._id}`}>Update Pet</Link>
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

export default AllPets