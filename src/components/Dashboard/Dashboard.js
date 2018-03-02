import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header.js';
import {Link} from 'react-router-dom';

export default class Profile extends React.Component {
   render() {
      return(
         <div>
            <Header componentName="Dashboard"/>
            <div className="dashboard-parent-container">
               <div className="dashboard-child-container">
                  <div className="dashboard-child-top">
                     <div className="user-info">

                        <div className="user-photo-container">
                           <img src="https://robohash.org/me" alt="user-photo" className="user-photo"/>
                        </div>
                        <div className="user-info-right">
                           <span className="user-info-name">First_Name</span>
                           <span className="user-info-name">Last_Name</span>
                           <Link to='/profile'>
                              <button className="edit-profile-button">Edit Profile</button>
                           </Link>
                        </div>
                     </div>

                     <div className='welcome-text-container'>
                        <span className="welcome-text">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                     </div>

                  </div>
               
                  <div className="dashboard-recommended-parent">
                     <div className="dashboard-recommended-child">
                        <div className="dashboard-recommended-header">
                           <span className="dashboard-recommended-title">Recommended Friends</span>
                        </div>
                     </div>
                  
                  </div>

               </div>
            </div>
         </div>
      )
   }
}