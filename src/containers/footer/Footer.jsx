import React from 'react';
import './footer.css';
import logos from '../../assets/logos.svg';

const Footer = () => {
  return (
    <div className="newageux__footer section__padding">
       <div className="newageux__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
       </div>

       <div className="newageux__footer-btn">
       <p>Request Early Access</p>
       </div>

       <div className="newageux__footer-links">
          <div className="newageux__footer-links_logo">
              <img src={logos} alt="logo" />
              <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="newageux__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
          </div>
          <div className="newageux__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
          </div>
          <div className="newageux__footer-links_div">
                <h4>Get in touch</h4>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
          </div>
       </div>

       <div className="newageux__footer-copyright">
        <p>© 2023 NewAgeUX. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer