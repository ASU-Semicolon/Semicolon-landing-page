import { Outlet, Link, useLocation } from "react-router-dom";
import FooterLink from "../components/footerLink/FooterLink";
import { useEffect, useRef, useState } from "react";
import "./base-css/nav.css";
import "./base-css/footer.css";
import "./base-css/logo.css";

export default function Base() {

    const [selectedNav, setSelectedNav] = useState("home");
    const navToggleButtton = useRef();
    const path = useLocation();

    const handleResize = () => {
        if (window.innerWidth > 760) {
            navToggleButtton.current.classList.remove("collapse");
            navToggleButtton.current.setAttribute("data-bs-toggle", "");
            navToggleButtton.current.setAttribute("data-bs-target", "");
        } else {
            navToggleButtton.current.classList.add("collapse");
            navToggleButtton.current.setAttribute("data-bs-toggle", "collapse");
            navToggleButtton.current.setAttribute(
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
                        <img
                            src="src/assets/home-graphics/logo.svg"
                            width="90px"
                            alt=""
                        />
                        <div className="main-logo-text">
                            <h2 className="main-logo-title">
                                Sem,Colon
                                <div className="orange-circle"></div>
                            </h2>
                            <p className="main-logo-slogan">
                                Debug Your
                                <span className="orange-text">Soul.</span>
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
                        ref={navToggleButtton}
                    >
                        <nav className="nav-bar">
                            <a href="#home">
                                <button
                                    className={`nav-button ${selectedNav == "home" && "selected"}`}
                                    onClick={() => {setSelectedNav("home")}}
                                >
                                    Home
                                </button>
                            </a>
                            <a href="#about">
                                <button
                                    className={`nav-button ${selectedNav == "about" && "selected"}`}
                                    onClick={() => {setSelectedNav("about")}}
                                >
                                    About Us
                                </button>
                            </a>
                            <a href="#committees">
                                <button
                                    className={`nav-button ${selectedNav == "committees" && "selected"}`}
                                    onClick={() => {setSelectedNav("committees")}}
                                >
                                    Committees
                                </button>
                            </a>
                            <a href="#contact">
                                <button
                                    className={`nav-button ${selectedNav == "contact" && "selected"}`}
                                    onClick={() => {setSelectedNav("contact")}}
                                >
                                    Contact Us
                                </button>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer>
                <div className="main-footer">
                    <Link to="/">
                        <div className="main-logo">
                            <img
                                src="src/assets/home-graphics/logo.svg"
                                width="90px"
                                alt=""
                            />
                            <div className="main-logo-text">
                                <h2 className="main-logo-title">
                                    Sem,Colon
                                    <div className="orange-circle"></div>
                                </h2>
                                <p className="main-logo-slogan">
                                    Debug Your
                                    <span className="orange-text">Soul.</span>
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="footer-links-container">
                        <div className="footer-links-list">
                            <p className="footer-list-title">FOLLOW US</p>
                            <FooterLink
                                href="https://www.facebook.com/SemiColon.team.asu"
                                url="src/assets/footer/Facebook.svg"
                                text="Facebook"
                            />
                            <FooterLink
                                href="https://www.linkedin.com/company/semicolon.org"
                                url="src/assets/footer/LinkedIn.svg"
                                text="LinkedIn"
                            />
                            <FooterLink
                                href="https://www.instagram.com/semicolon_asu/"
                                url="src/assets/footer/Instagram.svg"
                                text="Instagram"
                            />
                            
                        </div>
                        <div className={`footer-links-list ${path.pathname != "/" && "hidden"}`}>
                            <p className="footer-list-title">Navigate</p>
                            <FooterLink
                                href="#home"
                                target=""
                                url="src/assets/footer/Home.svg"
                                text="Home"
                                handleScroll={setSelectedNav}
                            />
                            <FooterLink
                                href="#about"
                                target=""
                                url="src/assets/footer/About.svg"
                                text="About"
                                handleScroll={setSelectedNav}
                            />
                            <FooterLink
                                href="#committees"
                                target=""
                                url="src/assets/footer/People.svg"
                                text="Committees"
                                handleScroll={setSelectedNav}
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
