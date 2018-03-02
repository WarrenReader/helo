import React from 'react';
import './Login.css';
import logo from './logo.png';

export default class Login extends React.Component {


   render() {
      return (
         <div className='login-parent-container'>
            <div className='login-child-container'>
               <div className='login-logo-container'>
                  <img src={logo} className='login-logo' alt='logo'/>
                  <div className='logo-text'>Helo</div>
               </div>

               <div className="login-button-container">
                     <a href="http://localhost:3030/auth" className="login-button">
                        <span className="login-button-text">Login / Register</span>
                     </a>
               </div>
            </div>
         </div>
      )
   }
}