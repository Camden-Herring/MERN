import React from 'react'
import {useParams} from 'react-router'

const Teams = () => {
    const {city, color1} = useParams();
    return (
        <div>
            <h1>Teams</h1>

            <h3 style={{backgroundColor: color1}}>Welcome to {city}</h3>
        </div>
    )
}

export default Teams