import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
 const NavBar=()=>{
   
    return(
         <nav className="navbar">
                <h2 className="title">
                Secure Extra Points System 
                </h2>
                <ul className="list">
                    <li>
                    <Link style={{ 
                        textDecoration: 'none' ,
                        color:'black',fontFamily: 'Josefin Sans',fontStyle: 'normal',

                        fontWeight: 400}}
                        to='./earn-points'>Earn Points</Link>
                    </li>
                    <li>
                    <Link style={{ 
                        textDecoration: 'none' ,
                        color:'black',fontFamily: 'Josefin Sans',fontStyle: 'normal',
                        fontWeight: 400 }}
                        to='./redeem'>Redeem Points</Link>
                    </li>
                    <li>
                    <Link style={{ 
                        textDecoration: 'none' ,
                        color:'black',fontFamily: 'Josefin Sans',fontStyle: 'normal',
                        fontWeight: 400 }}
                        to='./wallet'>Wallet</Link>
                    </li>
                </ul>
        </nav> 
    );
}
export default NavBar;