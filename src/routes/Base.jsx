import { Outlet, Link } from "react-router-dom";
import FooterLink from '../components/footerLink/FooterLink'
import './base.css'

export default function Base() {
  return (
    <>
      <header>
        <div className="main-logo">
          <img src="src/assets/home-graphics/logo.svg" width="130px" alt="" />
          <div className="main-logo-text">
            <h2 className='main-logo-title'>Sem,Colon
              <div className="orange-circle"></div>
            </h2>
            <p className='main-logo-slogan'>Debug Your <span className='orange-text'>Soul.</span></p>
          </div>
        </div>
        
        <nav className='nav-bar'>
          <button className='nav-button selected'><a href="#home">Home</a></button>
          <button className='nav-button'><a href="#about">About Us</a></button>
          <button className='nav-button'><a href="#committee">Committees</a></button>
          <button className='nav-button'><a href="#contact">Contact Us</a></button>
        </nav>
      </header>

      <Outlet />

      <footer>
        <div className="main-footer">
          <div className="main-logo">
            <img src="src/assets/home-graphics/logo.svg" width="130px" alt="" />
            <div className="main-logo-text">
              <h2 className='main-logo-title'>Sem,Colon
                <div className="orange-circle"></div>
              </h2>
              <p className='main-logo-slogan'>Debug Your <span className='orange-text'>Soul.</span></p>
            </div>
          </div>
          <div className="footer-links-container">
            <div className="footer-links-list">
              <p className='footer-list-title'>FOLLOW US</p>
              <FooterLink 
                href="https://www.facebook.com/SemiColon.team.asu"
                target='_blank'
                url="src/assets/footer/Facebook.svg"
                text="Facebook"
              />
              <FooterLink 
                href="https://www.linkedin.com/company/semicolon.org"
                target='_blank'
                url="src/assets/footer/LinkedIn.svg"
                text="LinkedIn"
              />
              <FooterLink 
                href=""
                target='_blank'
                url="src/assets/footer/Instagram.svg"
                text="Instagram"
              />
            </div>
            <div className="footer-links-list">
              <p className='footer-list-title'>Navigate</p>
              <FooterLink
                href="#home"
                target=''
                url="src/assets/footer/Home.svg"
                text="Home"
              />
              <FooterLink 
                href="#about"
                target=''
                url="src/assets/footer/About.svg"
                text="About"
              />
              <FooterLink 
                href="#committee"
                target=''
                url="src/assets/footer/People.svg"
                text="Committees"
              />
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p className='copyrights-text'>All Rights Reserved © SemiColon Club 2024</p>
        </div>
      </footer>
    </>
  )
}