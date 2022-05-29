import React, {useState} from 'react';
import "./singlePost.css"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post,setPost]=useState({});

    useEffect(() => {
        const getPost = async () => {
            const res =  await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (<img className="singlePostImg" src={post.photo} alt=""/>)}
                {/*{!post.photo && (<img className="singlePostImg" src="https://www.votesforyou.eu/images/titul/1-girl.jpg" alt=""/>)}*/}


                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"/>
                        <i className="singlePostIcon fa-solid fa-trash-can"/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                      <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDescription">
                    {post.desc}
                </p>
            </div>

        </div>
    )
}
