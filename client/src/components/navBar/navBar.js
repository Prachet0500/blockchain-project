import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
 const NavBar=()=>{
 
    
    return(
         <nav className="navbar">
            <div className="title">
                <h2> Secure Extra Points System </h2>
            </div>
            <div className="Menu">
                <ul className="list">
                    <li>
                    <Link to='./earn-points'>Earn Points</Link>
                    </li>
                    <li>
                    <Link to='./redeem'>Redeem Points</Link>
                    </li>
                    <li>
                    <Link to='./wallet'>Wallet</Link>
                    </li>
                </ul>
            </div>
        </nav> 
    );
}
export default NavBar;