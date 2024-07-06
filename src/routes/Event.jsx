import React from "react";
import { WorkshopCard } from "../components/workshopCard/WorkshopCard";
import "./event.css";
import { Outlet, Link } from "react-router-dom";
import cards from "./data";
import c from "../assets/cards/c.png";
import cpp from "../assets/cards/c++.png";
import front from "../assets/cards/basic web.png";
import react from "../assets/cards/advanced web.png";
import ai from "../assets/cards/ai.png";
import { FaMicrochip as FaMicrochip1 } from "react-icons/fa6";
import { FaMicrochip as FaMicrochip2 } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandPhp } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

const icons = {
    ARM: <FaMicrochip1 />,
    AVR: <FaMicrochip1 />,
    "C Programming": <img src={c} />,
    "C++ App. Development": <img src={cpp} />,
    "Digital Design": <FaMicrochip2 />,
    "Artificial Intelligence": <img src={ai} />,
    Flutter: <SiFlutter />,
    "Frontend Development": <img src={front} />,
    "Full Stack with PHP": <TbBrandPhp />,
    "JavaScript & NodeJS": <RiNodejsLine />,
    Python: <SiPython />,
    "Frontend with ReactJS": <img src={react} />,
};

const Hackathon = () => {
    return (
        <div className="hackathon-page">
            <div className="header">
                Semicolon is Here With
                <br />
                <span>ZerOne Event</span>
            </div>
            <section>
                <h1>A new opportunity to learn and practice.</h1>
                <p className="paragraph">
                    &emsp; Are you ready to discover new fields and master new
                    skills with us? Join this valuable learning experience in
                    our interactive environment!
                </p>
                <Link to="/form/workshops">
                    <button className="applyButton">Apply Now</button>
                </Link>
            </section>
            <section>
                <h1> Workshops </h1>
                <div className="field-cards">
                    {cards.map((card, index) => {
                        return (
                            <WorkshopCard
                                key={index}
                                card={card}
                                icon={icons[card.title]}
                            />
                        );
                    })}
                </div>
            </section>
            <Outlet />
        </div>
    );
};

export default Hackathon;
