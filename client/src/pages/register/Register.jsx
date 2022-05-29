import React, {useState} from 'react';
import "./register.css"
import "../../components/sidebar/SideBar"
import {Link} from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit= async (e) => {
        e.preventDefault();
       try{
           const res = await axios.post("/auth/register", {
               username,
               email,
               password
           });
           if(res.status===201){
               alert("Użytkownik został dodany!");
           }else if(res.status===400){
               alert("Użytkownik o podanym nicku już istnieje!");
           }else if(res.status===406){
               alert("Użytkownik o podanym adresie e-mail już istnieje!");
           }
           res.data && window.location.replace("/login");

       }catch (err){
           console.log(err);
           setError(true);
       }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input required type="text" className="registerInput"
                       placeholder="Enter your username..."
                       onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input required type="email" className="registerInput"
                       placeholder="Enter your email..."
                       onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input required type="password" className="registerInput"
                       placeholder="Enter your password..."
                       onChange={e => setPassword(e.target.value)}/>
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" className="link">LOGIN</Link>
            </button>
        </div>
    )
}