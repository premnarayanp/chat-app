import React, { Component } from 'react';
import '../styles/navbar.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  

  render() {
    return (
      <div className="nav">
       <div className='rounded-img-container'>
         <img src={require('../assets/myPhoto.jpg')} alt="movie-pic" />
       </div>

         <button className='create-group'>+ Create Group</button>
      </div>
    );
  }
}
