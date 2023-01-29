import React, {useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logos from '../../assets/logos.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#newageux">What is NewAgeUX</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

// BEM  👉🏾 Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="newageux__navbar">
        <div className="newageux__navbar-links">
            <div className="newageux__navbar-links_logos">
              <img src={logos} alt="logo" />
            </div>
            <div className="newageux__navbar-links_container">
              <Menu/>
            </div>
        </div>
        <div className="newageux__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="newageux__navbar-menu">
            {toggleMenu
               ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
               : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
              }
              {toggleMenu && (
                <div className="newageux__navbar-menu_container scale-up-center">
                  <div className="newageux__navbar-menu_container-links">
                  <Menu/>
                  <div className="newageux__navbar-menu_container-links-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
                  </div>
                </div>
              )}
        </div>
    </div>
  )
}

export default Navbar