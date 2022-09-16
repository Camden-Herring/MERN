import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


const EditProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description:"",
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
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
        axios.put(`http://localhost:8000/api/product/edit/${id}`, formInfo)
            .then(response => {
                console.log("Edit put request :", response)
                navigate("/")
            })
            .catch(err => {
                console.log("Error updating Product: ", err)
            })
    }

    return (
        <div className='container'>
            <h1>Edit Product</h1>
        <form className='form' onSubmit={submitHandler}>
            <div className="mb-3 d-flex">
                <label className='form-label'>Title: </label>
                <input className='form-control' type="text" name='title' value = {formInfo.title} onChange={onChangeHandler}/>
            </div>
            <div className="mb-3 d-flex">
                <label className='form-label'>Price: </label>
                <input className='form-control' type="number" name='price' value = {formInfo.price} onChange={onChangeHandler}/>
            </div>
            <div className="mb-3 d-flex">
                <label className='form-label'>Description: </label>
                <input className='form-control' type="text" name='description' value = {formInfo.description} onChange={onChangeHandler}/>
            </div>
            <div className="mb-3 d-flex">
                <Link className='btn btn-warning' to="/">Cancel</Link>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form></div>
    )
}

export default EditProduct