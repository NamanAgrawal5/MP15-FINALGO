import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const nav = useNavigate();
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span>
      <form className='loginform'>
        <label>Email</label>
        <input type='text' className='loginInput' placeholder='Enter email'/> 
        <label>Password</label>
        <input type='text' className='loginInput' placeholder='Password'/> 
        <button className='loginButton' onClick={()=>nav('/home')}>Login</button>
      </form>
      <button className='regButton' onClick={()=>nav('/reg')}>Register</button>
    </div>
  )
}
