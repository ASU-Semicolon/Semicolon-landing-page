import { Outlet, Link } from "react-router-dom";
import FooterLink from '../components/footerLink/FooterLink'
import { useRef } from "react";
import { scrollContext } from "../Context";
import './base.css'

export default function Base() {

  const scrollRef = useRef(new Array());

  const handleScroll1 = () => {
    scrollRef.current[0].scrollIntoView({behavior: 'smooth'});
  };
  const handleScroll2 = () => {
    scrollRef.current[1].scrollIntoView({behavior: 'smooth'});
  };
  const handleScroll3 = () => {
    scrollRef.current[2].scrollIntoView({behavior: 'smooth'});
  };
  const handleScroll4 = () => {
    scrollRef.current[3].scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <scrollContext.Provider value={{scrollRef}} >
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
            <Link to="/">
              <button className='nav-button selected' onClick={handleScroll1}>Home</button>
            </Link>
            <Link to="/">
              <button className='nav-button' onClick={handleScroll2}>About Us</button>
            </Link>
            <Link to="/">
              <button className='nav-button' onClick={handleScroll3}>Committees</button>
            </Link>
            <Link to="/">
              <button className='nav-button' onClick={handleScroll4}>Contact Us</button>
            </Link>
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
                <Link to="/">
                  <FooterLink
                    handleScroll = {handleScroll1}
                    target=''
                    url="src/assets/footer/Home.svg"
                    text="Home"
                  />
                </Link>
                <Link to="/">
                  <FooterLink 
                    handleScroll = {handleScroll2}
                    target=''
                    url="src/assets/footer/About.svg"
                    text="About"
                  />
                </Link>
                <Link to="/">
                  <FooterLink 
                    handleScroll = {handleScroll3}
                    target=''
                    url="src/assets/footer/People.svg"
                    text="Committees"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <p className='copyrights-text'>All Rights Reserved © SemiColon Club 2024</p>
          </div>
        </footer>
      </scrollContext.Provider>
    </>
  )
}