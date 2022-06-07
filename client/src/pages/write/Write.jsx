import React, {useContext, useState} from 'react';
import "./write.css"
import axios from "axios";
import {Context} from "../../context/Context";

export default function Write() {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [file,setFile]=useState("");
    const {user} = useContext(Context);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const newPost={
            username:user.username,
            title,
            desc
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo=filename;
            try{
                await axios.post("/upload",data);
            }catch (err){
                console.log(err);
            }
        }
        try{
           const res = await axios.post("/posts",newPost);
            window.location.replace("/post/"+res.data._id);
        }catch (err){
            console.log(err);
        }


    };
    return (
        <div className="write" >
            {
                file && (
                    <img className="writeImg" alt="" src={URL.createObjectURL(file)}/>
                )

            }
            {/*{*/}
            {/*    !file &&( <img className="writeImg" alt="" src="https://preview.redd.it/u4dizec9gxv01.jpg?auto=webp&s=2ed738177324144b43276d47a87e61c4066f4ae8"/>)*/}
            {/*}*/}

            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"/>
                    </label>
                    <input type="file" id="fileInput" onChange={e=>setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus="true" onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Tell your story . . ."  className="writeInput writeText" onChange={e=>setDesc(e.target.value)}/>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}