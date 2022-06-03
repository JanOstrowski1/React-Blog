import React, {useContext, useRef, useState} from 'react';
import "./login.css"
import "../../components/sidebar/SideBar"
import { Link } from "react-router-dom";
import {Context} from "../../context/Context";
import axios from "axios";

export default function Login() {
    const userRef=useRef();
    const passwordRef=useRef();
    const {dispatch,isFetching}=useContext(Context);
    const [error, setError] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res =await axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch (err){
            dispatch({type:"LOGIN_FAILURE"});
            setError(true);
        }
    };
    return (
        <div className="login" >
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef}/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                {(error === true) && <span className="error1">Wrong credentials!</span>}
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}