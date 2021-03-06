import React from 'react';
import './Profile.css';
import Header from '../Header/Header.js';
import {connect} from 'react-redux';

class Profile extends React.Component {
   render() {

      const {firstName, lastName} = this.props;

      return(
         <div>
            <Header componentName="Profile"/>
            
            <div className="profile-parent-container">
               <div className="profile-child-container">
                  <div className="profile-top-container">
                     <img src="https://robohash.org/me" alt="profile image" className="profile-image"/>
                     <div className="profile-name-container">
                        <span className="profile-name">{firstName}</span>
                        <br />
                        <span className="profile-name">{lastName}</span>
                     </div>
                     <div className="profile-button-right">
                        <button className="profile-update-button">Update</button>
                        <button className="profile-cancel-button">Cancel</button>
                     </div>
                  </div>
                  <div className="profile-edit-container">
                     <div className="profile-edit-container-child">
                        <div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">First Name</span>
                              <input className="profile-user-input-field"/>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Last Name</span>
                              <input className="profile-user-input-field"/>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Gender</span>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Hair Color</span>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Eye Color</span>
                           </div>
                        </div>
                        <div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Hobby</span>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Birth Day</span>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Birth Month</span>
                           </div>
                           <div className="profile-user-input-container">
                              <span className="profile-user-input-title">Birth Year</span>
                           </div>
                        </div>
                     </div>
                  </div>   
               </div>
            </div>

         </div>
      ) 
   }
}

function mapStateToProps(state) {
   return {
      firstName: state.firstName
      , lastName: state.lastName
   }
}

export default connect(mapStateToProps)(Profile);