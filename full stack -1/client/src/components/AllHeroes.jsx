import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const AllHeroes = () => {
    const [allHeroes, setAllHeroes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/heroes")
        .then((response)=>{
            console.log(response.data.results)
            setAllHeroes(response.data.results)
        })
        .catch((err)=>{
            console.log('This is your get error: ', err)
        })
    }, [])

    return (

        <div className='container'>
            <h1>All Heroes</h1>
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
                                    <td><button className='btn btn-primary'>Edit</button> | <button className='btn btn-danger'>Delete</button></td>
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