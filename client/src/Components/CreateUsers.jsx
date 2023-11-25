import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () =>{
  const [user, setUser] = useState({name:'', email:'', age:''});
  const {name, email, age} = user;
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3006/create', {name, email, age})
    .then(result=>{
      console.log(result);
      navigate('/');
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form action="" onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' value={name} name='name'
            onChange={handleChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' value={email} name='email'
            onChange={handleChange}/>
          </div>

          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' value={age} name='age'
            onChange={handleChange}/>
          </div>

          <button type='submit' className='btn btn-success'>Submit</button> &nbsp;
          <Link to='/' className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    </div>
  )
}

export default CreateUser;