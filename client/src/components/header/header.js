import React from "react";
import placeholder from  "../../images/placeholder.svg"
import { useNavigate } from "react-router";
import './style.css'
const Header =()=>{

    const navigate=useNavigate();
    const handleBuyClick=()=>{
        navigate('/buy');
    }
    console.log('header',placeholder)

    return(

        <div className="Header">
            <div className="head">
                <div className="hash">#Simple. #Transparent. #Secure</div><br/>
                <div className="name">Extra Points Solutions</div><br/>
                <div className="description">Products and services designed to help you reach your financial goals.</div><br/>
                <button className='header-button'onClick={handleBuyClick}><div>Buy Now</div></button>
            </div> 
            <div>
                <img src={placeholder} className="headerimg"alt='ok'></img>
            </div>     
        </div>
    );
}

export default Header;