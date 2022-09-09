import React from 'react'
import {useState, useEffect} from 'react';

import axios from 'axios';

const UseEffectCrypto = () => {

    // const [coins, setCoin] = useState([])
    const [pokie, setPokie] = useState([])

    let[buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response)=>{
        console.log("getting back response from our API:", response.data.results)
        setPokie(response.data.results);
    })
    .catch((error)=>{
        console.log("this is the catch all error", error)
    })
        
    }, [buttonClicked])


    

    return (
    <div>
        <h1>UseEffectCrypto</h1>
        <button onClick={()=>{setButtonClicked(!buttonClicked)}}>Re-run the api call to get updated coin data</button>
        {/* <button onClick={testAxios} >testbutton</button> */}
        
        {
            // coins.map((c, index)=>{
            //     return(
            //         <div key={index}>
            //             {/* <img src={c.image} height="50px"/> */}
            //             <h3>{c.name}</h3>
            //             {/* <p>{c.current_price}</p> */}
            //         </div>
            //         )
            //     })
        }

        {
            pokie.map((c, index)=>{
                return(
                    <div key={index}>
                        {/* <img src={c.image} height="50px"/> */}
                        <h3>{c.name}</h3>
                        {/* <p>{c.current_price}</p> */}
                    </div>
                    )
                })
        }
    </div>
    )
}

export default UseEffectCrypto;