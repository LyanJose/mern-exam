import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';

function Login() {
    //TODO:Fonction for the validation
    const [values,setValues] = useState({
        email: '',
        password: ''
    })
    //TODO:Fonction for errors
    const [errors,setErrors] = useState({})
    //TODO:Fonction for the input
    const handleInput = event =>{
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    //TODO:Fonction for the form
    const handleSubmit = event =>{
        event.preventDefault();
        setErrors(Validation(values));
    }
    //*call the handleSubmit
  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
        <div className='bg-white p-3 rounded w-30'>
            <h2>Sign-in</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' 
                            placeholder='Enter your email' 
                            onChange={handleInput} 
                            className='form-control rounded-2'
                            name='email'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' 
                            placeholder='Enter your pasword' 
                            onChange={handleInput} 
                            className='form-control rounded-2'
                            name='password'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-2'><strong>Log in</strong></button>
                <p>You are agree to our terms and policies</p>
                <Link to="/signup" className='btn btn-default border w-100 rounded-2 text-decoration-none'>
                    Create an Account
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Login