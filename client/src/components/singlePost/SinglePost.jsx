import React, {useState, useContext} from 'react';
import "./singlePost.css"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/Context";


export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/"
    const {user} = useContext(Context);
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    const [updateMode,setUpdateMode]= useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);


    const handleDelete = async()=>{
        try{
            await axios.delete("/posts/"+path , {data:{username:user.username}});
            window.location.replace("/");
        }catch (err){
            console.log(err);
        }
    }

    const handleUpdate=async ()=>{
        try{
            await axios.put("/posts/"+path  , {username:user.username,title,desc});
            setUpdateMode(false);
        }catch (err){
            console.log(err);
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (<img className="singlePostImg" src={PF + post.photo} alt=""/>)}
                {/*{!post.photo && (<img className="singlePostImg" src="https://www.votesforyou.eu/images/titul/1-girl.jpg" alt=""/>)}*/}

                {
                    updateMode? <input type="text" value={title} className="singlePostTitleInput" autoFocus  onChange={(e)=>setTitle(e.target.value)}/> : (
                        <h1 className="singlePostTitle">
                            {title}
                            {(user && post.username === user.username) && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}/>
                                    <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}/>
                                </div>
                            )}

                        </h1>
                    )
                }

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                      <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>



                {
                    updateMode? (<textarea className="singlePostDescriptionInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>) : (
                        <p className="singlePostDescription">
                            {desc}
                        </p>
                    )
                }
                {
                    updateMode &&(<button className="singlePostUpdateButton" onClick={handleUpdate}>Update</button>)
                }


            </div>

        </div>
    )
}
