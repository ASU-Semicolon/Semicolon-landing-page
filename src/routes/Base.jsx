import { Outlet, Link } from "react-router-dom";
import ExternalFooterLink from "../components/footerLink/ExternalFooterLink";
import InternalFooterLink from "../components/footerLink/InternalFooterLink";
import { useEffect, useRef } from "react";
import { scrollContext } from "../Context";
import Logo from "../assets/home-graphics/logo.svg";
import FacebookIcon from "../assets/footer/Facebook.svg";
import LinkedInIcon from "../assets/footer/LinkedIn.svg";
import HomeIcon from "../assets/footer/Home.svg";
import AboutIcon from "../assets/footer/About.svg";
import PeopleIcon from "../assets/footer/People.svg";
import "./base-css/nav.css";
import "./base-css/footer.css";
import "./base-css/logo.css";

export default function Base() {
    const navRef = useRef(new Array());
    const scrollRef = useRef(new Array());
    const navToggleButton = useRef();

    const handleScroll = (num) => {
        for (let i = 0; i < navRef.current.length; i++) {
            navRef.current[i].classList.remove("selected");
        }
        navRef.current[num].classList.add("selected");
        scrollRef.current[num].scrollIntoView({ behavior: "smooth" });
    };

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
                                <span className="orange-text">Soul.</span>
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="nav-wrapper">
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

                    <div id="navbarToggleExternalContent" ref={navToggleButton}>
                        <nav className="nav-bar">
                            <Link to="/">
                                <button
                                    className="nav-button selected"
                                    ref={(element) =>
                                        navRef.current.push(element)
                                    }
                                    onClick={() => {
                                        handleScroll(0);
                                    }}
                                >
                                    Home
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="nav-button"
                                    ref={(element) =>
                                        navRef.current.push(element)
                                    }
                                    onClick={() => {
                                        handleScroll(1);
                                    }}
                                >
                                    About Us
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="nav-button"
                                    ref={(element) =>
                                        navRef.current.push(element)
                                    }
                                    onClick={() => {
                                        handleScroll(2);
                                    }}
                                >
                                    Committees
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="nav-button"
                                    ref={(element) =>
                                        navRef.current.push(element)
                                    }
                                    onClick={() => {
                                        handleScroll(3);
                                    }}
                                >
                                    Contact Us
                                </button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <scrollContext.Provider value={{ scrollRef }}>
                <Outlet />
            </scrollContext.Provider>

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
                                    <span className="orange-text">Soul.</span>
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="footer-links-container">
                        <div className="footer-links-list">
                            <p className="footer-list-title">FOLLOW US</p>
                            <ExternalFooterLink
                                href="https://www.facebook.com/SemiColon.team.asu"
                                url={FacebookIcon}
                                text="Facebook"
                            />
                            <ExternalFooterLink
                                href="https://www.linkedin.com/company/semicolon.org"
                                url={LinkedInIcon}
                                text="LinkedIn"
                            />
                        </div>
                        <div className="footer-links-list">
                            <p className="footer-list-title">Navigate</p>
                            <Link to="/">
                                <InternalFooterLink
                                    handleScroll={handleScroll}
                                    target="0"
                                    url={HomeIcon}
                                    text="Home"
                                />
                            </Link>
                            <Link to="/">
                                <InternalFooterLink
                                    handleScroll={handleScroll}
                                    target="1"
                                    url={AboutIcon}
                                    text="About"
                                />
                            </Link>
                            <Link to="/">
                                <InternalFooterLink
                                    handleScroll={handleScroll}
                                    target="2"
                                    url={PeopleIcon}
                                    text="Committees"
                                />
                            </Link>
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
