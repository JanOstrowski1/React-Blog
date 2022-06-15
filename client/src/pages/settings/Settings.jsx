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
    const placeholder = "http://localhost:5000/images/placeholder.jpg"
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);

        } catch (err) {
            console.log(err);
        }


    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="topImg"  src={file ? URL.createObjectURL(file) : (user.profilePic?user.profilePic:placeholder)} alt=""/>

                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"/>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
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