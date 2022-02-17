import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Register() 
{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();

async function signUp() 
{
    let item = {name,password,email}
    // console.warn(item)
    let result = await fetch("http://127.0.0.1:8000/api/register",{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate("/add");
}

    return(
        <div className='col-sm-6 offset-sm-3'>
            <h1>User Sign Up</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' className='form-control' />
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' className='form-control' />
            <br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' className='form-control' />
            <br />
            <button onClick={signUp} className='btn btn-primary'>Sign Up</button>

        </div>
    )
}

export default Register