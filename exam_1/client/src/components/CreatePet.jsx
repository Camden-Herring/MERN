import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreatePet = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name : "",
        rating : "",
        img : "",
        skillone: "",
        skilltwo: "",
        skillthree: "",
    });

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet/new", formInfo)
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
        <div>
            <h1>Add Pet</h1>
            <form className='form' onSubmit={submitHandler}>
                {errors.map((err, index)=> <p key={index} className="text-danger">{err}</p>)}
                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Name: </label>
                    <input type="text" className='form-control' name='name' onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Type: </label>
                    <input type="text" className='form-control' name='type' onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Description: </label>
                    <input type="text" className='form-control' name='description' onChange={onChangeHandler}/>
                </div>

                    <div className="mb-3 d-flex">
                        <h4>Skills (optional!)</h4>
                    </div>

                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Skill One: </label>
                    <input type="text" className='form-control' name='skillone' onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Skill Two: </label>
                    <input type="text" className='form-control' name='skilltwo' onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Skill Three: </label>
                    <input type="text" className='form-control' name='skillthree' onChange={onChangeHandler}/>
                </div>
                <div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <Link className='btn btn-success' to="/">Home</Link>
                </div>
            </form>
        </div>
    )
}

export default CreatePet