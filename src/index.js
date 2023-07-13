import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const fname="Bhagyashri";
const lname="Ratnaparkhi";
const currentDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();
const links="https://www.canva.com/learn/quotes-on-happiness/";

ReactDOM.render(<div className="card-container">
    <h1 className="heading">Hello world!!</h1>
    <h1>{`My name is ${fname + " " +lname}`}</h1>
    <p>{currentDate + " " + currTime}</p>
    
    <a href={links} target='_Happiness'>

    <img src="https://quotefancy.com/media/wallpaper/3840x2160/2257165-Elbert-Hubbard-Quote-Get-happiness-out-of-your-work-or-you-may.jpg" alt="Good morning"  className="image"/>
    </a>
    
    <p className="paragraph">How are you??</p>

    <ol>
    <li className="name">Anaya</li>
    <li className="name">Pallavi</li>
    <li className="name">Shrikant</li>
    <li className="name">Vaibhav</li>
    <li className="name">Mona</li>
    </ol>
 
    <button className="btn">
        Reply me
    </button>
</div>,
document.getElementById('root'));

