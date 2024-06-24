import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function NavigationBar(props) {
    const [selectedNav, setSelectedNav] = useState("home");
    const navLinksContainer = useRef();
    const navToggleButton = useRef();
    const eventDesktop = useRef();
    const eventMobile = useRef();
    const navBarRef = useRef();
    const path = useLocation();

    const handleScroll = (id) => {
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
        props.getFunctions({handleEventButton, setSelectedNav});
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);


    return (
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
    );
}
