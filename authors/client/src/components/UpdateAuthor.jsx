import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const UpdateAuthor = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name:"",
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
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
        axios.put(`http://localhost:8000/api/author/update/${id}`, formInfo)
            .then(response => {
                console.log("Edit put request :", response)
                navigate("/")
            })
            .catch(err => {
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
            <h1>Update Author</h1>
            <form className='form' onSubmit={submitHandler}>
            {errors.map((err, index)=> <p key={index} className="text-danger">{err}</p>)}
                <div className="mb-3 d-flex">
                    <label className='form-label'>Name: </label>
                    <input className='form-control' type="text" name='name' value = {formInfo.name} onChange={onChangeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <Link className='btn btn-warning' to="/">Cancel</Link>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAuthor