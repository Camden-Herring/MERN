import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {

    //-------------------create portion of app-----------------
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        title : "",
        price : "",
        description : "",
    });

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then((response) => {
                console.log(response)

                //choice one -------------- maintaining the list!!
                // setAllProducts([...allProducts, response.data.results])

                //choice two-----------
                setRefreshToggle(!refreshToggle)

                setFormInfo({
                    title : "",
                    price : "",
                    description : "",
                })
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
    //------------------end of create portion of app--------------
    //------------------start of view all portion of hompage -----------------

    const [allProducts, setAllProducts] = useState([]);
    const [refreshToggle, setRefreshToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((response)=>{
            console.log(response.data.results)
            setAllProducts(response.data.results)
        })
        .catch((err)=>{
            console.log('This is your get error: ', err)
        })
    }, [refreshToggle])

    return(
        <div className="container">
            <h1>Add Product</h1>

            <form onSubmit={submitHandler}>
                {errors.map((err, index)=> <p key={index} className="text-danger">{err}</p>)}
                <div className="mb-3 d-flex">
                    <label className='form-label'>Title: </label>
                    <input type="text" className='form-input' name='title' onChange={onChangeHandler} value={formInfo.title}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>Price: </label>
                    <input type="number" step=".01" className='form-input' name='price' onChange={onChangeHandler} value={formInfo.price}/>
                </div>
                <div className="mb-3 d-flex">
                    <label className='form-label'>description: </label>
                    <input type="text" className='form-input' name='description' onChange={onChangeHandler} value={formInfo.description} />
                </div>
                <div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <Link className='btn btn-success' to="/">Home</Link>
                </div>
            </form>
            {/* start of display all table */}
            <div className="container">
                <h2>All Products</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product Title: </th>
                            <th>Product Price: </th>
                            <th>Product Description: </th>
                            <th>Product Actions: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map((p, i)=>{
                                return (
                                    <tr key = {i}>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <td>
                                            <Link></Link>
                                            <button></button>
                                            <Link></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default HomePage;