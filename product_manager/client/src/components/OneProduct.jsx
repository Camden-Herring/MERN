import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

const OneProduct = () => {
    const [oneProduct, setOneProduct] = useState({});

    const [refreshToggle, setRefreshToggle] = useState(false)

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
            console.log(response)
            setOneProduct(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id]);

    const deleteProduct = (e, id) => {
        console.log("Deleting Product", id)
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then((response)=>{
                console.log("Delete was successful", response)
                setRefreshToggle(!refreshToggle)
                navigate("/")
            })
            .catch(err => console.log("something went wrong deleting", err))
    }

    return (
        <div className="container">
            <Link className='btn btn-primary' to="/product/new">Add product</Link> 
            <Link className='btn btn-success' to="/">Home</Link>
            <button onClick={(e)=>{deleteProduct(e, oneProduct._id)}} className='btn btn-danger'>Delete</button>
            <p>Product Title: {oneProduct.title}</p>
            <p>Product Price: {oneProduct.price}</p>
            <p>Product Description: {oneProduct.descpription}</p>
        </div>
    )

}

export default OneProduct;