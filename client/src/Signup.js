import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation'

function Signup() {
    //TODO:Fonction for the validation
    const [values,setValues] = useState({
        name:'',
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
            <h2>Sign-up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' 
                            placeholder='Enter your name' 
                            className='form-control rounded-2'
                            onChange={handleInput}
                            name='name'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='text' 
                            placeholder='Enter your ' 
                            className='form-control rounded-2'
                            onChange={handleInput}
                            name='email'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' 
                            placeholder='Enter your pasword' 
                            className='form-control rounded-2'
                            onChange={handleInput}
                            name='password'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-2'><strong>Sign up</strong></button>
                <p>You are agree to our terms and policies</p>
                <Link to="/" className='btn btn-default border w-100 rounded-2 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup