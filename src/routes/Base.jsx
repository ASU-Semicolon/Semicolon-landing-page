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
import NavigationBar from "../components/navigationBar/NavigationBar";
import "./base-css/footer.css";
import "./base-css/logo.css";
import "./base-css/nav.css";

export default function Base() {
    const [functions, setFunctions] = useState();
    let handleEventButton, setSelectedNav;

    const getFunctions = (functions) => {
        setFunctions(functions);
    };

    const handleScroll = (id) => {
        const navButton = document.getElementById(id);
        navButton.scrollIntoView({ behavior: "smooth" });
    };

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

                <NavigationBar getFunctions={getFunctions} />
            </header>

            {functions && <Outlet context={functions} />}

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
                                location != "/" && "hidden"
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
