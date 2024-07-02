import "./TopBar.css"
import React from 'react'

export default function TopBar(){
    return(
        <div className ="topbar">
            <text>The Programming Parade</text>
            <div className = "link_btn">
                <button className = "btn-" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://github.com/';
                                        }}
                                        >GitHub</button>
                <button className = "btn-">Youtube</button>
            </div>
            

        </div>
    );
}