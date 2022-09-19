import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const UpdatePet = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        name:"",
        rating:"",
        img:"",
        skillone: "",
        skilltwo: "",
        skillthree: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
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
        axios.put(`http://localhost:8000/api/pet/update/${id}`, formInfo)
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
            <h1>Update Pet: {formInfo.name}</h1>
            <form className='form' onSubmit={submitHandler}>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Pet Name: </label>
                    <input className='form-control' type="text" name='name' value = {formInfo.name} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Pet Type: </label>
                    <input className='form-control' type="text" name='type' value = {formInfo.type} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Pet Description: </label>
                    <input className='form-control' type="text" name='description' value = {formInfo.description} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Pet Skill One: </label>
                    <input className='form-control' type="text" name='skillone' value = {formInfo.skillone} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Pet Skill Two: </label>
                    <input className='form-control' type="text" name='skilltwo' value = {formInfo.skilltwo} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Pet Skill Three: </label>
                    <input className='form-control' type="text" name='skillthree' value = {formInfo.skillthree} onChange={onChangeHandler}/>
                </div>
                
                <div className="mb-3 d-flex">
                    <Link className='btn btn-warning' to="/">Cancel</Link>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePet