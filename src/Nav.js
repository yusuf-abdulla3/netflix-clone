
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
      window.removeEventListener("scroll");
    };
  }, []);
  
  return (
    <div className = {`nav ${show && "nav__black"}`}>
      <img 
      className = "nav__logo"
      src = "./Netflix-logo-on-transparent-background-PNG.png"
      />

<img 
      className = "nav__avatar"
      src = "./Netflix-avatar.png"
      />
      </div>
  )
}

export default Nav