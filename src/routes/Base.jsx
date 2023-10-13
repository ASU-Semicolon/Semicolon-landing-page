import { Outlet, Link, useLocation } from "react-router-dom";
import FooterLink from "../components/footerLink/FooterLink";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/home-graphics/logo.svg";
import FacebookIcon from "../assets/footer/Facebook.svg";
import LinkedInIcon from "../assets/footer/LinkedIn.svg";
import HomeIcon from "../assets/footer/Home.svg";
import AboutIcon from "../assets/footer/About.svg";
import PeopleIcon from "../assets/footer/People.svg";
import InstagramIcon from "../assets/footer/Instagram.svg"
import "./base-css/nav.css";
import "./base-css/footer.css";
import "./base-css/logo.css";

export default function Base() {
    const [selectedNav, setSelectedNav] = useState("home");
    const navToggleButton = useRef();
    const path = useLocation();

    const handleScroll = (id) => {
        setSelectedNav(id);
        const navButton = document.getElementById(id);
        navButton.scrollIntoView({ behavior: 'smooth' });
    }

    const handleResize = () => {
        if (window.innerWidth > 760) {
            navToggleButton.current.classList.remove("collapse");
            navToggleButton.current.setAttribute("data-bs-toggle", "");
            navToggleButton.current.setAttribute("data-bs-target", "");
        } else {
            navToggleButton.current.classList.add("collapse");
            navToggleButton.current.setAttribute("data-bs-toggle", "collapse");
            navToggleButton.current.setAttribute(
                "data-bs-target",
                "#navbarToggleExternalContent"
            );
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <>
            <header>
                <Link to="/">
                    <div className="main-logo">
                        <img src={Logo} width="90px" alt="" />
                        <div className="main-logo-text">
                            <h2 className="main-logo-title">
                                Sem,Colon
                                <div className="orange-circle"></div>
                            </h2>
                            <p className="main-logo-slogan">
                                Debug Your
                                <span className="orange-text"> Soul.</span>
                            </p>
                        </div>
                    </div>
                </Link>

                <div className={`nav-wrapper ${path.pathname != "/" && "hidden"}`}>
                    <nav className="navbar navbar-dark nav-mobile">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <div className="nav-icon"></div>
                            <div className="nav-icon"></div>
                        </button>
                    </nav>

                    <div
                        id="navbarToggleExternalContent"
                        ref={navToggleButton}
                    >
                        <nav className="nav-bar">
                            <button
                                className={`nav-button ${selectedNav == "home" && "selected"}`}
                                onClick={() => {handleScroll("home")}}
                            >
                                Home
                            </button>
                            <button
                                className={`nav-button ${selectedNav == "about" && "selected"}`}
                                onClick={() => {handleScroll("about")}}
                            >
                                About Us
                            </button>
                            <button
                                className={`nav-button ${selectedNav == "committees" && "selected"}`}
                                onClick={() => {handleScroll("committees")}}
                            >
                                Committees
                            </button>
                            <button
                                className={`nav-button ${selectedNav == "contact" && "selected"}`}
                                onClick={() => {handleScroll("contact")}}
                            >
                                Contact Us
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer>
                <div className="main-footer">
                    <Link to="/">
                        <div className="main-logo">
                            <img src={Logo} width="90px" alt="" />
                            <div className="main-logo-text">
                                <h2 className="main-logo-title">
                                    Sem,Colon
                                    <div className="orange-circle"></div>
                                </h2>
                                <p className="main-logo-slogan">
                                    Debug Your
                                    <span className="orange-text"> Soul.</span>
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="footer-links-container">
                        <div className="footer-links-list">
                            <p className="footer-list-title">FOLLOW US</p>
                            <FooterLink
                                href="https://www.facebook.com/SemiColon.team.asu"
                                target="_blank"
                                url={FacebookIcon}
                                text="Facebook"
                            />
                            <FooterLink
                                href="https://www.linkedin.com/company/semicolon.org"
                                target="_blank"
                                url={LinkedInIcon}
                                text="LinkedIn"
                            />
                            <FooterLink
                                href="https://www.instagram.com/semicolon_asu/"
                                target="_blank"
                                url={InstagramIcon}
                                text="Instagram"
                            />
                            
                        </div>
                        <div className={`footer-links-list ${path.pathname != "/" && "hidden"}`}>
                            <p className="footer-list-title">Navigate</p>
                            <FooterLink
                                scrollTo="home"
                                url={HomeIcon}
                                text="Home"
                                handleScroll={handleScroll}
                            />
                            <FooterLink
                                scrollTo="about"
                                url={AboutIcon}
                                text="About"
                                handleScroll={handleScroll}
                            />
                            <FooterLink
                                scrollTo="committees"
                                url={PeopleIcon}
                                text="Committees"
                                handleScroll={handleScroll}
                            />
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <p className="copyrights-text">
                        All Rights Reserved © SemiColon Club 2024
                    </p>
                </div>
            </footer>
        </>
    );
}
