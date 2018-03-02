import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header.js';

export default class Profile extends React.Component {
   render() {
      return(
         <div>
            <Header componentName="Dashboard"/>
            Hello
         </div>
      )
   }
}