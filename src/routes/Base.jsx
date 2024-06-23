import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AboutIcon from "../assets/footer/About.svg";
import FacebookIcon from "../assets/footer/Facebook.svg";
import HomeIcon from "../assets/footer/Home.svg";
import InstagramIcon from "../assets/footer/Instagram.svg";
import LinkedInIcon from "../assets/footer/LinkedIn.svg";
import PeopleIcon from "../assets/footer/People.svg";
import Logo from "../assets/home-graphics/logo.svg";
import FooterLink from "../components/footerLink/FooterLink";
import "./base-css/footer.css";
import "./base-css/logo.css";
import "./base-css/nav.css";

export default function Base() {
    const [selectedNav, setSelectedNav] = useState("home");
    const navLinksContainer = useRef();
    const navToggleButton = useRef();
    const eventDesktop = useRef();
    const eventMobile = useRef();
    const navBarRef = useRef();
    const path = useLocation();

    const handleScroll = (id) => {
        setSelectedNav(id);
        const navButton = document.getElementById(id);
        navButton.scrollIntoView({ behavior: "smooth" });
    };

    const handleEventButton = () => {
        if (window.innerWidth < 1030) {
            eventMobile.current.classList.add("event-nav-show");
        } else {
            eventDesktop.current.classList.add("event-nav-show");
        }
        handleResize();
    };

    const handleResize = () => {
        const isShown =
            eventMobile.current.classList.contains("event-nav-show") ||
            eventDesktop.current.classList.contains("event-nav-show");

        if (window.innerWidth < 760 || (isShown && window.innerWidth < 1030)) {
            if (isShown) {
                eventDesktop.current.classList.remove("event-nav-show");
                eventDesktop.current.classList.add("hide_event_button", "hidden");
                eventMobile.current.classList.add("event-nav-show");
                eventMobile.current.classList.remove("hide_event_button", "hidden");
            }
            navToggleButton.current.classList.remove("hidden");
            navBarRef.current.classList.add("nav-bar-mobile");
            navBarRef.current.classList.remove("nav-bar-desktop");
            navLinksContainer.current.classList.add("collapse");
            navLinksContainer.current.setAttribute(
                "data-bs-toggle",
                "collapse"
            );
            navLinksContainer.current.setAttribute(
                "data-bs-target",
                "#navbarToggleExternalContent"
            );
        } else {
            if (isShown) {
                eventDesktop.current.classList.add("event-nav-show");
                eventDesktop.current.classList.remove("hide_event_button", "hidden");
                eventMobile.current.classList.remove("event-nav-show");
                eventMobile.current.classList.add("hide_event_button", "hidden");
            }
            navToggleButton.current.classList.add("hidden");
            navBarRef.current.classList.add("nav-bar-desktop");
            navBarRef.current.classList.remove("nav-bar-mobile");
            navLinksContainer.current.classList.remove("collapse");
            navLinksContainer.current.setAttribute("data-bs-toggle", "");
            navLinksContainer.current.setAttribute("data-bs-target", "");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    // Scroll to top when changing routes
    const location = useLocation().pathname;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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

                <div
                    className={`nav-wrapper ${
                        path.pathname != "/" && "hidden"
                    }`}
                >
                    <button
                        className="nav-button event-link-nav hide_event_button"
                        ref={eventMobile}
                    >
                        <Link to="/event">ZerOne</Link>
                    </button>

                    <nav className="navbar navbar-dark" ref={navToggleButton}>
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
                        ref={navLinksContainer}
                    >
                        <nav className="" ref={navBarRef}>
                            <button
                                className="nav-button event-link-nav hide_event_button"
                                ref={eventDesktop}
                            >
                                <Link to="/event">ZerOne</Link>
                            </button>
                            <button
                                className={`nav-button ${
                                    selectedNav == "home" && "selected"
                                }`}
                                onClick={() => {
                                    handleScroll("home");
                                }}
                            >
                                Home
                            </button>
                            <button
                                className={`nav-button ${
                                    selectedNav == "about" && "selected"
                                }`}
                                onClick={() => {
                                    handleScroll("about");
                                }}
                            >
                                About Us
                            </button>
                            <button
                                className={`nav-button ${
                                    selectedNav == "committees" && "selected"
                                }`}
                                onClick={() => {
                                    handleScroll("committees");
                                }}
                            >
                                Committees
                            </button>
                            <button
                                className={`nav-button ${
                                    selectedNav == "contact" && "selected"
                                }`}
                                onClick={() => {
                                    handleScroll("contact");
                                }}
                            >
                                Contact Us
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            <Outlet context={handleEventButton} />

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
                        <div
                            className={`footer-links-list ${
                                path.pathname != "/" && "hidden"
                            }`}
                        >
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
