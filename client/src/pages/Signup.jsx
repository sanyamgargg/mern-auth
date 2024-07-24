import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'


export default  function Signup() {
  const [formData,setFormData] = useState({}) ;
  const [loading,setLoading] = useState(false) ;
  const [error,setError] = useState(false) ;
  const navigate = useNavigate() ;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
  
    console.log('Form Data:', formData); // Log form data for debugging
  
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
      setLoading(false);
  
      if (data.success === false) {
        setError(true);
        return;
      }
  
      navigate('/signin');
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };
  
  const handleClick = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  return (

    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input className='bg-slate-100 p-3 rounded-lg'type="text" placeholder='username' id='username'
        onChange={handleClick}  />
        <input className='bg-slate-100 p-3 rounded-lg'type="email" placeholder='email' id='email' onChange={handleClick} />
        <input className='bg-slate-100 p-3 rounded-lg'type="password" placeholder='password' id='password'
        onChange={handleClick}  />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
        
      </form>
      <div className='flex'>
      <p>Already Have an Account? </p>
      <Link to='/signin'>
      <span className='text-blue-500'> Sign In</span></Link>
      
      </div>
      <div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
      </div>
      
    </div>
    
  )
}

