import React from 'react'
import {useState, useEffect} from 'react';

import axios from 'axios';

export default function Test() {

    const [data, setData] = useState([])

    const testAxios = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
        console.log("Getting back response from API", response)
        // setData(response)
    })
    .catch((error)=>{
        console.log("this is the catch all error", error)
    })
    }

    return (
    <div>
        <h1>AxioCrypto</h1>
        <button onClick={testAxios} >testbutton</button>
        {
            data?data.map((c, index)=>{
                return(
                    <div key={index}>
                        <img src={c.image} height="50px"/>
                        <h3>{c.name}</h3>
                        <p>{c.current_price}</p>
                    </div>
                    )
                }):<p></p>
        }
    </div>
    )
}
