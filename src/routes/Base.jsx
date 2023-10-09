import { Outlet, Link } from "react-router-dom";
import FooterLink from "../components/footerLink/FooterLink";
import { useEffect, useRef } from "react";
import { scrollContext } from "../Context";
import "./base-css/nav.css";
import "./base-css/footer.css";
import "./base-css/logo.css";

export default function Base() {
    const scrollRef = useRef(new Array());
    const myDiv = useRef();

    const handleScroll = (event, num) => {
        const buttons = event.target.parentElement.parentElement.children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].children[0].classList.remove("selected");
        }
        event.target.classList.add("selected");
        scrollRef.current[num].scrollIntoView({ behavior: "smooth" });
    };

    const handleResize = () => {
        if (window.innerWidth > 760) {
            myDiv.current.classList.remove("collapse");
            myDiv.current.setAttribute("data-bs-toggle", "");
            myDiv.current.setAttribute("data-bs-target", "");
        } else {
            myDiv.current.classList.add("collapse");
            myDiv.current.setAttribute("data-bs-toggle", "collapse");
            myDiv.current.setAttribute(
                "data-bs-target",
                "#navbarToggleExternalContent",
            );
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
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
                                Debug Your{" "}
                                <span className="orange-text">Soul.</span>
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="nav-wrapper">
                    <nav class="navbar navbar-dark mobile">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <div class="nav-icon"></div>
                            <div class="nav-icon"></div>
                        </button>
                    </nav>

                    <div id="navbarToggleExternalContent" ref={myDiv}>
                        <nav className="nav-bar">
                            <Link to="/">
                                <button
                                    className="nav-button selected"
                                    onClick={(event) => {
                                        handleScroll(event, 0);
                                    }}
                                >
                                    Home
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="nav-button"
                                    onClick={(event) => {
                                        handleScroll(event, 1);
                                    }}
                                >
                                    About Us
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="nav-button"
                                    onClick={(event) => {
                                        handleScroll(event, 2);
                                    }}
                                >
                                    Committees
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="nav-button"
                                    onClick={(event) => {
                                        handleScroll(event, 3);
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
                                    Debug Your{" "}
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
                                target="_blank"
                                url="src/assets/footer/Facebook.svg"
                                text="Facebook"
                            />
                            <FooterLink
                                href="https://www.linkedin.com/company/semicolon.org"
                                target="_blank"
                                url="src/assets/footer/LinkedIn.svg"
                                text="LinkedIn"
                            />
                            <FooterLink
                                href=""
                                target="_blank"
                                url="src/assets/footer/Instagram.svg"
                                text="Instagram"
                            />
                        </div>
                        <div className="footer-links-list">
                            <p className="footer-list-title">Navigate</p>
                            <Link to="/">
                                <FooterLink
                                    handleScroll={(event) => {
                                        handleScroll(event, 0);
                                    }}
                                    target=""
                                    url="src/assets/footer/Home.svg"
                                    text="Home"
                                />
                            </Link>
                            <Link to="/">
                                <FooterLink
                                    handleScroll={(event) => {
                                        handleScroll(event, 1);
                                    }}
                                    target=""
                                    url="src/assets/footer/About.svg"
                                    text="About"
                                />
                            </Link>
                            <Link to="/">
                                <FooterLink
                                    handleScroll={(event) => {
                                        handleScroll(event, 2);
                                    }}
                                    target=""
                                    url="src/assets/footer/People.svg"
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
