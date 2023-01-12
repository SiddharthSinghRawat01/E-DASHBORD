import React,{useState} from "react";
import {useNavigate} from 'react-router-dom' // hook use to redirect

const SignUp = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigat =  useNavigate();

    const collectData= async ()=>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}), // api took object in json.stringify
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()

        console.warn( result);

        if(result){
            navigat('/') // where you want to navigate
        }

    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
            <button onClick={collectData} className="appButton" type="button" >Sign Up</button>
        </div>
    )
}

export default SignUp;