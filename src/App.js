// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// import logo from "./assets/Img/caroselImg1.jpeg"; 

const imgUrls = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
    'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
    'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg'
]



function App() {
  const [state, setState] = useState(false)
  const [imgState, setimgState] = useState(0)

  const hamPress = () => {
      setState(!state)
      console.log(state)
  }

  const leftFunc = () =>{
    if(imgState === 0){
        setimgState(2)
    }
    else{
        setimgState(imgState-1)
    }
  }

   const rightFunc = () =>{
    if(imgState === 2){
        setimgState(0)
    }
    else{
        setimgState(imgState+1)
    }
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
            <div className="lefthand" onClick = {leftFunc}></div>
            <img src={imgUrls[imgState]} alt="logo" />
            <div className="righthand" onClick = {rightFunc}></div>            
        </div>


      <div className="bodyMain">
        <div className="dogForm">
            <h2>Do you need a doggo ?</h2>
            <form className="mainForm">
                <label>Name</label>
                <input type="text" placeholder="Your Full Name"></input>
                <label>Email</label>
                <input type="text" placeholder="Your Email"></input>
                <label>Breed</label>
                <select>
                    <option selected disabled>--choose your fav breed</option>
                    <option>Pomsky</option>
                    <option>Pom</option>
                    <option>Lab</option>
                    <option>Poodle</option>
                    <option>Husky</option>
                    <option>Doodle</option>
                </select>  
                <br/>
                <br/>
                <input type="submit"></input>  
            </form>
        </div>

        <div>
            <h1>Dogs are important part of life and we will help you to find your perfect partner</h1>
        </div>

       </div>

    </div>

  );
}

export default App;
