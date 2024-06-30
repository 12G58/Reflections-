import { BrowserRouter } from 'react-router-dom'; 
import {Route, Routes} from 'react-router-dom'; 

import {Logic, Contact, Science, Nlp, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

import { useState } from "react";
import { signOut } from "firebase/auth";

const App = () => { 

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/logic";
    });
  };

  return (
    <BrowserRouter>

    <div className = "relative z-0 bg-secondary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar /> 
      </div>
      <Routes>
        <Route path = '/' element = { <><div  className = "bg-hero-pattern bg-cover bg-no-repeat bg-center"> < Hero isAuth={isAuth} /></div> <div className = "bg-black"> <Nlp /></div></>} /> 
        <Route path = '/logic' element = { <Logic setIsAuth = {setIsAuth} /> } />
        <Route path = '/science' element = { <Science isAuth = {isAuth}/> } />
        <Route path = '/machines' element = { <Tech /> } />
        <Route path = '/philosophy' element = { <Works /> } /> 

      </Routes>
      
      <div className = "relatie z-0">
        <Contact /> 
        <StarsCanvas /> 
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
