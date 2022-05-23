import React from 'react';
import "./write.css"

export default function Write() {
    return (
        <div className="write" >
            <img className="writeImg" alt="" src="https://preview.redd.it/u4dizec9gxv01.jpg?auto=webp&s=2ed738177324144b43276d47a87e61c4066f4ae8"/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"/>
                    </label>
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus="true"/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Tell your story . . ."  className="writeInput writeText"/>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}