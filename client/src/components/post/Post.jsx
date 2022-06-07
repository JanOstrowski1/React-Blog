import React from 'react';
import "./post.css"
import {Link} from "react-router-dom";

export default function Post({post}) {
    const PF = "http://localhost:5000/images/"
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} alt=""/>
            )}
            {!post.photo && ( //filler image
                    <img className="postImg" src="https://thumbs.dreamstime.com/b/cropped-photo-funny-lady-show-perfect-condition-beaming-smile-tongue-wear-red-dress-isolated-purple-background-156386488.jpg" alt=""/>
                )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((cat)=>
                        <span className="postCat">{cat.name}</span>
                    )}
                </div>

                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>


                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDecryption">
                {post.desc}
            </p>
            {
                post.desc.length>200 && (<Link to={`/post/${post._id}`} className="link"><span className="postReadMore">Read more</span></Link>)
            }


        </div>
    )
}
