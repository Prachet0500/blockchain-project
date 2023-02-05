import React from "react";
import { useNavigate } from "react-router";
import './style.css'
const Header =()=>{
    const navigate=useNavigate();
    const handleBuyClick=()=>{
        navigate(',/buy')
    }
    return(

        <div className="Header"><button onClick={handleBuyClick}>Buy</button></div>
    )
}
export default Header;