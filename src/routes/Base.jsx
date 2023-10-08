import { Outlet, Link } from "react-router-dom";
import FooterLink from '../components/footerLink/FooterLink'
import './base.css'

export default function Base() {
  return (
    <>

      <header className="desktop-header">
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
          <button className='nav-button selected'>Home</button>
          <button className='nav-button'>About Us</button>
          <button className='nav-button'>Committees</button>
          <button className='nav-button'>Contact Us</button>
        </nav>
      </header>
      <header className="mobile-header">
        <div className="all-mobile-nav">
        <div className="main-logo">
          <img src="src/assets/home-graphics/logo.svg" width="130px" alt="" />
          <div className="main-logo-text">
            <h2 className='main-logo-title'>Sem,Colon
              <div className="orange-circle"></div>
            </h2>
            <p className='main-logo-slogan'>Debug Your <span className='orange-text'>Soul.</span></p>
          </div>
        </div>
        <div className="divnav">
<nav class="navbar navbar-dark ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="True" aria-label="Toggle navigation">
      <div class="nav-icon"></div>
      <div class="nav-icon"></div>
    </button>
  </div>
</nav>
<div class="collapse" id="navbarToggleExternalContent">
  <div class="p-4">
  <nav className='nav-bar-mobile'>
          <button className='nav-button selected'>Home</button>
          <button className='nav-button'>About Us</button>
          <button className='nav-button'>Committees</button>
          <button className='nav-button'>Contact Us</button>
        </nav>
  </div>
</div>
</div>
</div>
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
                url="src/assets/footer/Facebook.svg"
                text="Facebook"
              />
              <FooterLink 
                url="src/assets/footer/LinkedIn.svg"
                text="LinkedIn"
              />
              <FooterLink 
                url="src/assets/footer/Instagram.svg"
                text="Instagram"
              />
            </div>
            <div className="footer-links-list">
              <p className='footer-list-title'>Navigate</p>
              <FooterLink 
                url="src/assets/footer/Home.svg"
                text="Home"
              />
              <FooterLink 
                url="src/assets/footer/About.svg"
                text="About"
              />
              <FooterLink 
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