import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddHero = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name : "",
        rating : "",
        img : "",
    });

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/hero/new", formInfo)
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch((err)=>{
                const errorResponse = err.response.data.err.errors;
                console.log("This is the catch: ", errorResponse)
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className = "container">
            <h1>Add Hero</h1>
            <form onSubmit={submitHandler}>
                {errors.map((err, index)=> <p key={index} className="text-danger">{err}</p>)}
                <div className="mb-3 d-flex">
                    <label className="form-label">Name: </label>
                    <input type="text" className='form-input' name='name' onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Rating: </label>
                    <input type="number" className='form-input' name='rating' onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Image: </label>
                    <input type="text" className='form-input' name='img' onChange={onChangeHandler}/>
                </div>
                <div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <Link className='btn btn-success' to="/">Home</Link>
                </div>
            </form>
        </div>
    )
}

export default AddHero;

/*
1. import useState
2. import axios
3. import useNavigate
4. import useEffect
*/