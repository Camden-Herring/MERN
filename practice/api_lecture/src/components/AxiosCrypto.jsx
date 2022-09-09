import React, {useState} from 'react'



const AxiosCrypto = () => {
  //create a state variable to store our API results in
    const [coins, setCoin] = useState([])

    const fetch_data = () =>{

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response)=>{
        return response.json()//so we can parse the response to json format
    })
    .then((response)=>{
        console.log("Getting back response from API", response)
        setCoin(response)
    })
    .catch((error)=>{
        console.log("this is the catch all error", error)
    })

    }

    return (
    <div >
        <h1><AxiosCrypto/></h1>
        <button onClick={fetch_data} >Click me for Crypto Data!</button>
        {
        coins.map((c, index)=>{
        return(
            <div key={index}>
                <img src={c.image} height="50px"/>
                <h3>{c.name}</h3>
                <p>{c.current_price}</p>
            </div>
            )
        })
        }
    </div>
    
    );
}


export default AxiosCrypto;
