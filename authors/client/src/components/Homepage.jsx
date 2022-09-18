import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((response)=>{
            console.log(response.data.results)
            setAllAuthors(response.data.results)
        })
        .catch((err)=>{
            console.log('This is your get error: ', err)
        })
    }, [deleteToggle])

    const deleteAuthor = (e, id) => {
        console.log("Deleting Author", id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then((response)=>{
                console.log("Delete was successful", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log("something went wrong deleting", err))
    }

    return (
        <div className="container">
            <h1>All Authors</h1>
            <Link className='btn btn-primary' to="/author/new">Add Author</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope = "col">Author Name: </th>
                        <th scope = "col">Author Actions: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((a, i) => {
                            return (
                                <tr key = {i}>
                                    <td>{a.name}</td>
                                    <td>
                                    <Link to={`/author/update/${a._id}`} className='btn btn-primary'>Update</Link> | 
                                    <button onClick={(e)=>{deleteAuthor(e, a._id)}} className='btn btn-warning'>Delete</button>
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

export default Homepage;