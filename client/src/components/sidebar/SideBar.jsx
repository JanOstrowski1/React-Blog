import React from 'react'
import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://media.istockphoto.com/photos/black-girl-holding-credit-card-thinking-about-market-picture-id1201174779?k=20&m=1201174779&s=612x612&w=0&h=QKU6d0YmNhol9Zf4H629Q2uhVacYVy5wuwFGOVI9amY=" alt=""/>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, illo. Quam distinctio dolorum quo animi ex, pariatur error esse ducimus beatae cupiditate porro quae, accusamus dolorem neque accusantium voluptate dolore?
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Tech</li>
          </ul>
        </div>
        <div className="sidebarItem">
         <span className="sidebarTitle">SOCIALS</span>
          <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          </div>
        </div>

    </div>
  )
}
