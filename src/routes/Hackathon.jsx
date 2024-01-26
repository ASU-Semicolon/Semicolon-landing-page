import React from "react";
import { HackathonCard } from "../components/HackathonCard/HackathonCard";
import "./hackathon.css";
import webIcon from '../assets/web-hackathon-icon.svg'
import softwareIcon from '../assets/software-hackathon-icon.svg'
import embeddedIcon from '../assets/embedded-hackathon-icon.svg'
import timeIcon from '../assets/hackathon/time.png'
import dateIcon from '../assets/hackathon/date.png'
import { Outlet } from "react-router-dom";


const Hackathon = () => {
    let cards = [
        {
            title: "Webathon",
            field: "web",
            subtitle: "Web Development",
            icon: <img src={webIcon} alt="web-icon" />,
            content:
                "Utilize your knowledge in web development to create a full-stack project using your favorate framework.",
        },
        {
            title: "Software",
            field: "sw",
            subtitle: "Software Engineering",
            icon: <img src={softwareIcon} alt="web-icon" />,
            content:
                "Develop a desktop software from scratch, and tackle performance and efficiency problems to create a professional software.",
        },
        {
            title: "GameHack",
            field: "emb",
            subtitle: "Arduino",
            icon: <img src={embeddedIcon} alt="web-icon" />,
            content:
                "Start a fun challenge to design and create a game using an arduino board.",
        },
    ];

    return (
        <div className="hackathon-page">
            <div className="header">
                Semicolon is Here With<br />'24 Winter's <span>Hack Week</span>
            </div>
            <section>
                <h1>Are You Ready to Compete?</h1>
                <p className="paragraph">&emsp; Venture into a new opportunity to join a friendly and intense coding contest. Work with your team and aim for the top with your project.</p>
                <p className="info">
                    <img src={dateIcon}/> Start Date: 3 February 2024
                </p>
                <p className="info">
                    <img src={timeIcon}/> Duration: 1 Week
                </p>
            </section>
            <section>
                <h1> Fields </h1>
                <div className="field-cards">
                    {cards.map(
                        ({ title, field, icon, content}, index) => {
                            return (
                                <HackathonCard
                                    key={title}
                                    field={field}
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
            <Outlet/>
        </div>
    );
};

export default Hackathon;
