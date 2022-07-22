
import { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
const [show, handleShow] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      if(window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  
  return (
    <div className = {`nav ${show && "nav__black"}`}>
      <img 
      className = "nav__logo"
      src = "./netflix-logo.png"
      />

<img 
      className = "nav__avatar"
      src = "./Netflix-avatar.png"
      />
      </div>
  )
}

export default Nav