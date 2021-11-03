// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import logo from "./assets/Img/caroselImg1.jpeg"; 

function App() {
  const [state, setState] = useState(false)

  const hamPress = () => {
      setState(!state)
      console.log(state)
  }

  return ( 
    <div className="container">
          <svg class="back" width="959" height="723" viewBox="0 0 959 723" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="700" cy="23" r="700" fill="#E1DE96" fill-opacity="0.6"/>
    </svg> 
              <div className="header">
            <div className="logo"><svg class="lg" width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.8861 8.64002C27.8861 13.4118 22.8257 18 16.5834 18C10.3411 18 5.28067 13.4118 5.28067 8.64002C5.28067 3.86828 -12.0502 2.36231e-05 16.5834 2.36231e-05C45.2169 2.36231e-05 27.8861 3.86828 27.8861 8.64002Z" fill="#E1DE96"/>
                </svg>
                 LOGO</div>
            <div className="nav">
                <ul className={state? "active": ""}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
            </div>
            <div className="auth">
                <ul className={state? "active": ""}>
                    <li><a href="#">SIGN UP</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </div>
            <div className={state? "active hamburger": "hamburger"} onClick={hamPress}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
        <div className="carosel">
            <div className="lefthand"></div>
            <img src={logo} alt="logo" />
            <div className="righthand"></div>            
        </div>
    </div>
  );
}

export default App;
