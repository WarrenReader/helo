import React from 'react';
import './Header.css';
import home from './home.png';
import magnifyingGlass from './magnifying-glass.png';
import {Link} from 'react-router-dom';

export default (props) => {
   return (
      <div className="header-parent-container">
         <div className="header-child-container">

            <div className="header-left">
               <span className="helo-text">Helo</span>
               <Link to="/dashboard"><img src={home} className="header-home" alt="home"/></Link>
               <Link to="/search/1"><img src={magnifyingGlass} className="header-search" alt="magnifying glass"/></Link>
            </div>

            <div className="header-center">
               <span className="component-name">{props.componentName}</span>
            </div>

            <div className="header-left">
               <Link to="http://localhost:3030/auth/logout"><span className="header-logout">Logout</span></Link>
            </div>

         </div>
      </div>
   )
}