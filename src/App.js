import logo from './logo.svg';
import Home from './components/Home';
import ReactWeb from './components/ReactWeb';
import GCPBasics from './components/GCPBasics';
import GCPLooker from './components/GCPLooker';
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReactWeb" element={<ReactWeb />} />
        <Route path="/GCPBasics" element={<GCPBasics />} />
        <Route path="/GCPLooker" element={<GCPLooker />} />
      </Routes>
    
    </BrowserRouter>
  );
}


