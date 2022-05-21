import React from 'react';
import "./write.css"

export default function Write() {
    return (
        <div className="write" >
            <img className="writeImg" alt="" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/caa37538-cdf6-469c-89df-bccfc899a450/dcvce7q-ab908032-6f11-4ee3-8831-09bbd43c5dcb.jpg/v1/fill/w_1280,h_720,q_75,strp/another_ariana_grande_wallpaper_by_legendaryronin_dcvce7q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvY2FhMzc1MzgtY2RmNi00NjljLTg5ZGYtYmNjZmM4OTlhNDUwXC9kY3ZjZTdxLWFiOTA4MDMyLTZmMTEtNGVlMy04ODMxLTA5YmJkNDNjNWRjYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GXv2-5O-I4Voq5JPRDNNFb72EDCxmJ9OF-Bh3ktR8eI"/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"/>
                    </label>
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus="true"/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Tell yout story . . ."  className="writeInput writeText"/>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}