import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const EditHero = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        name:"",
        rating:"",
        img:"",
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/hero/${id}`)
            .then(response => {
                console.log(response)
                setFormInfo(response.data.results)
            })
            .catch(err=>{
                console.log("edit page get request: ", err)
            })
    }, [id])

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/hero/update/${id}`, formInfo)
            .then(response => {
                console.log("Edit put request :", response)
                navigate("/")
            })
            .catch(err => {
                console.log("Error updating Hero: ", err)
            })
    }

    return (
        <div className='container'> 
            <h1>Edit Hero</h1>
            <form className='form' onSubmit={submitHandler}>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Name: </label>
                    <input className='form-control' type="text" name='name' value = {formInfo.name} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Rating: </label>
                    <input className='form-control' type="number" name='rating' value = {formInfo.rating} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Image: </label>
                    <input className='form-control' type="text" name='image' value = {formInfo.img} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <Link className='btn btn-warning' to="/">Cancel</Link>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditHero

/*
1. import useState
2. import axios
3. import useNavigate
4. import useEffect
5. import useParams
*/