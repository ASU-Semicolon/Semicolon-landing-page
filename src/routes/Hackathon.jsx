import React from "react";
import { HackathonCard } from "../components/HackathonCard/HackathonCard";
import "./hackathon.css";

const Hackathon = () => {
    let cards = [
        {
            title: "Web Dev",
            icon: "",
            content:
                "Python's simple syntax is ideal for beginners. Its versatile applications and helpful community make it a great choice for new programmers.",
        },
        {
            title: "Software",
            icon: "",
            content:
                "Python's simple syntax is ideal for beginners. Its versatile applications and helpful community make it a great choice for new programmers.",
        },
        {
            title: "Embedded",
            icon: "",
            content:
                "Python's simple syntax is ideal for beginners. Its versatile applications and helpful community make it a great choice for new programmers.",
        },
    ];

    return (
        <div className="hackathon-page">
            <div className="header">
                Semicolon is Here With <br /> A New <span>Hackathon</span>
            </div>
            <section>
                <h1> Fields </h1>
                <div className="field-cards">
                    {cards.map(
                        ({ title, icon, content, buttonText }, index) => {
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
            <section>
                <h1> Rules </h1>
                <ul>
                    <li>Teams up to 3 members.</li>
                    <li>Duration of the Hackathon is 1 week.</li>
                </ul>
            </section>
        </div>
    );
};

export default Hackathon;
