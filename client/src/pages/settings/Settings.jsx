import React, {useContext, useState} from 'react';
import "./settings.css" ;
import SideBar from "../../components/sidebar/SideBar";
import {Context} from "../../context/Context";
import axios from "axios";


export default function Settings() {

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const {user, dispatch} = useContext(Context);

    const PF="http://localhost:5000/images/";
    const placeholder = PF+ "placeholder.jpg";
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data});
        } catch (err) {
            dispatch({type:"UPDATE_FAILURE"});
        }


    };

   const handleDelete = async () => {
       try {
           await axios.delete("/users/" + user._id,{data:{userId:user._id}});
           dispatch({type:"LOGOUT"});
           window.location.replace("/");
       } catch (err) {
           console.log(err);
       }
   }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="topImg"  src={file ? URL.createObjectURL(file) : (user.profilePic?PF+user.profilePic:placeholder)} alt=""/>

                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"/>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input required type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input required type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input required type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                    <button className="settingsSubmit" type="submit">Update</button>
                    {
                        success && <span className="settingsInfo">Updated successfully</span>
                    }
                </form>
            </div>
            <SideBar/>
        </div>
    )
}