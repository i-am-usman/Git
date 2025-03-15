import profilePic from './assets/profilePic.jpg'
import React from 'react';
import ClickMe from './ClickMe.jsx';

function Card(){
    
    return(
        <div className='card'>
            <img className="cardImage" src={profilePic} alt="Profile-pic"></img>
            <h1> Muhammad Usman</h1>
            <p>Computer Science Undergraduate</p>
            <ClickMe/>

        </div>
    );
}

export default Card;