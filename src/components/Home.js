import "./Home.css"
import TopBar from "./TopBar";

import * as React from 'react';
import { Router, Routes,Route,Link, useNavigate  } from 'react-router-dom';

export default function Home(){
    return(
        <div className ="home">
            <TopBar/>
            <div className="options">
                <Link to ="/GCPBasics" className="btn"><span>GCPBasics</span></Link>
                <Link to ="/GCPLooker" className="btn"><span>GCPLooker</span></Link>
                <Link to ="/ReactWeb" className="btn"><span>ReactWeb</span></Link>
            </div>

        </div>
    );
}
// npm i react-router-dom --save styled-components 