import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

const PeopleComponent = () => {

    const [data, setData] = useState({})

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
            setData({error: "These aren't the droids you're looking for!"})
        })
    },[id])

    return data.error ? (
        <h1>{data.error}</h1>
        ) : (
        <div>
            <h1>Star Wars Chracter Info: </h1>
            <h3>Name: {data.name}</h3>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Gender: {data.gender}</p>
        </div>
    )
}

export default PeopleComponent