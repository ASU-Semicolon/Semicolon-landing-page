import React from "react";
import { HackathonCard } from "../components/HackathonCard/HackathonCard";
import "./hackathon.css";
import webIcon from '../assets/web-hackathon-icon.svg'
import softwareIcon from '../assets/software-hackathon-icon.svg'
import embeddedIcon from '../assets/embedded-hackathon-icon.svg'


const Hackathon = () => {
    let cards = [
        {
            title: "Web Dev",
            icon: <img src={webIcon} alt="web-icon" />,
            content:
                "Python's simple syntax is ideal for beginners. Its versatile applications and helpful community make it a great choice for new programmers.",
        },
        {
            title: "Software",
            icon: <img src={softwareIcon} alt="web-icon" />,
            content:
                "Python's simple syntax is ideal for beginners. Its versatile applications and helpful community make it a great choice for new programmers.",
        },
        {
            title: "Embedded",
            icon: <img src={embeddedIcon} alt="web-icon" />,
            content:
                "Python's simple syntax is ideal for beginners. Its versatile applications and helpful community make it a great choice for new programmers.",
        },
    ];

    return (
        <div className="hackathon-page">
            <div className="header">
                Semicolon is Here With<br />'24 Winter's <span>Hack Week</span>
            </div>
            <section>
                <h1> Rules </h1>
                <ul>
                    <li>Teams up to 3 members.</li>
                    <li>Duration of the Hackathon is 1 week.</li>
                </ul>
            </section>
            <section>
                <h1> Fields </h1>
                <div className="field-cards">
                    {cards.map(
                        ({ title, icon, content}, index) => {
                            return (
                                <HackathonCard
                                    key={title}
                                    title={title}
                                    icon={icon}
                                    content={content}
                                    buttonClass={
                                        index % 2 == 0 ? "yellow" : "white"
                                    }
                                />
                            );
                        }
                    )}
                </div>
            </section>
        </div>
    );
};

export default Hackathon;
