import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

const PlanetComponent = () => {

    const [data, setData] = useState({})

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
            setData({error: "These aren't the droids you're looking for!"})
        },[id])
    })

    return data.error ? (
        <h1>{data.error}</h1>
        ) : (
        <div>
            <h1>Star Wars Planet Info: </h1>
            <h3>Name: {data.name}</h3>
            <p>Climate: {data.climate}</p>
            <p>Rotation Period: {data.rotation_period}</p>
            <p>Terrain: {data.terrain}</p>
        </div>
    )
}

export default PlanetComponent