import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

import React from 'react'

const AddAuthor = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name : "",
    });

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/new", formInfo)
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
        <div className='container'>
            <h1>Add Author</h1>
            <form onSubmit={submitHandler}>
                {errors.map((err, index)=> <p key={index} className="text-danger">{err}</p>)}
                <div className="mb-3 d-flex">
                    <label className="form-label">Name: </label>
                    <input type="text" className='form-input' name='name' onChange={onChangeHandler}/>
                </div>
                <div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <Link className='btn btn-success' to="/">Home</Link>
                </div>
            </form>
        </div>
    )
}

export default AddAuthor