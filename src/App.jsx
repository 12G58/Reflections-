import { BrowserRouter } from 'react-router-dom'; 
import {Route, Routes} from 'react-router-dom'; 

import {Login, CreatePost, Nlp, Hero, Navbar} from './components';

import { useState } from "react";
import { signOut } from "firebase/auth";

const App = () => { 

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
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
        <Route path = '/login' element = { <Login setIsAuth = {setIsAuth} /> }/>
        <Route path = '/create_post' element = { <CreatePost /> } />

      </Routes>
      <div className = "relatie z-0">
       
      </div>
    </div>
    </BrowserRouter>
  )
}
export default App
