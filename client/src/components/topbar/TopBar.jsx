import "./topbar.css"
import React ,{useContext} from 'react';
import { Link } from "react-router-dom";
import {Context} from "../../context/Context";
export default function TopBar() {
    const {user,dispatch}= useContext(Context);

    const handleLogout= ()=>{
        dispatch({type:"LOGOUT"});
    };
    const PF="http://localhost:5000/images/";
    const placeholder = PF+ "placeholder.jpg";
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"/>
                <i className="topIcon fa-brands fa-instagram-square"/>
                <i className="topIcon fa-brands fa-twitter-square"/>
                <i className="topIcon fa-brands fa-pinterest-square"/>
                </div>
            <div className="topCenter">
               <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link" >HOME</Link></li>
                    <li className="topListItem"><Link to="/" className="link" >ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link" >CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link" >WRITE</Link></li>
                   <li className="topListItem" onClick={handleLogout}>
                       {user && "LOGOUT"}
                   </li>
               </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link className="link" to="/settings">
                            {user.profilePic?(<img className="topImg"  src={PF+user.profilePic} alt=""/>):
                                (<img className="topImg"  src={placeholder} alt=""/>)}
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link to="/login" className="link" >LOGIN</Link></li>
                            <li className="topListItem"><Link to="/register" className="link" >REGISTER</Link></li>
                        </ul>
                    )
                }
                

                <i className="topSearchIcon fa-solid fa-magnifying-glass"/>
            </div>
        </div>
    )
}
