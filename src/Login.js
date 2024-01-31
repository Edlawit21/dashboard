import React from 'react'
import './login.css'

function login() {
  return (
    <div className='login-page'>
      <div className='year'>
        <span>School Year</span>
        <select>
            <option value='2021'>2021</option>
            <option value='2022'>2021</option>
            <option value='2023'>2021</option>
            <option value='2024'>2021</option>
        </select>
      </div>
      <div className='center'>
        <h1 className='login-h1'>Login</h1>
        <form >
            <div className='input-user'>
            <label >Username:</label>
            <input className='txt_field' type='text' name='username' placeholder='Username'/>
            </div>
            <div>
            <label >Password:</label>
            <input className='txt_field' type='password' name='password' placeholder='Password'/>
            </div>
            <div>
            <button className='login-btn'>SIGN IN</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default login
.login-page{
    background: #f1eef5;
    width: 100vw;
    height: 100vh;
    font-family:'Times New Roman', Times, serif;
 }
.center{
    width: 330px;
    height: 330px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 10px;
}
.login-h1{
    text-align: center;
    padding: 40px 0 10px 0 ;
    border-bottom: 1px solid rgb(103, 96, 96);
}
.input-user{
    margin-bottom: 1rem;
}

.txt_field {
    float: right;
    border: 1px solid rgb(103, 96, 96);
    border-radius: 2px;
    padding: 2px;
    
}
.login-btn{
    background-color: rgb(46, 24, 92);
    color: white;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer; 
    margin-top: 40px;
    font-size: large;
}

 
 .year{
    padding-top: 5.4em;
    padding-left: 29em;
 }
