import React from 'react'
import { useState } from 'react';


const Form = () =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <h1>fill out this form!</h1>
            <form>
                <div className="form-group">
                    <label className='form-label'>First Name: </label>
                    <input onChange={(e) => setFirstName(e.target.value)} type = "text" className='form-control'/>
                    {
                        firstName.length <3 && firstName.length >0 ? <p className='text-danger'>First Name must be at least 3 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className='form-label'>Last Name: </label>
                    <input onChange={(e) => setLastName(e.target.value)} type = "text" className='form-control'/>
                    {
                        lastName.length <2 && lastName.length >0 ? <p className='text-danger'>Last Name must be at least 3 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className='form-label'>Email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} type = "text" className='form-control'/>
                    {
                        email.length <2 && email.length >0 ? <p className='text-danger'>Email must be at least 3 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className='form-label'>Password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} type = "text" className='form-control'/>
                    {
                        password.length <8 && password.length >0 ? <p className='text-danger'>Password must be at least 8 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label className='form-label'>Confirm Password: </label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type = "text" className='form-control' />
                    {
                        confirmPassword.length <8 && confirmPassword.length >0 ? <p className='text-danger'>Confirm Password must be at least 8 characters long</p> : null
                    }
                    {
                        confirmPassword !== password ? <p className='text-danger'>Passwords must match!</p> : null
                    }
                </div>

            </form>
            <hr/>
            <p>Your info:</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Form;