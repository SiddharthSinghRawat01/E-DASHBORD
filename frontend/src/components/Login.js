import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const handelLogin = async ()=>{
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.auth){
    localStorage.setItem("user",JSON.stringify(result.user));
    localStorage.setItem("token",JSON.stringify(result.auth));
    navigate("/");
        }else{
            alert("please enter correct details");
        }

    }

    return(
        <div className='login'>
            <input type="email" value={email} className='inputBox' placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" value={password} className='inputBox' placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handelLogin} className='appButton' type='button'>Log In</button>
        </div>
    )
}

export default Login;
