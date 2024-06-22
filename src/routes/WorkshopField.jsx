import React from "react";
import { useParams } from "react-router-dom";
import "./hackathon.css";

const WorkshopField = () => {
    const { fieldName } = useParams();
    const tracks = [
        {
            title: "Web Development Hackathon",
            field: "web",
            header: "Full-Stack Web Application",
            description: "In this project you will create a web app. both front-end and back-end are required, there are requriements for each one like mobile responsivity and user authentication.",
            rules: ["Teams from 2 to 5 members.",
                    "Duration of the Hackathon is 3 week."]
        },
        {
            title: "Software Engineering Hackathon",
            field: "sw",
            header: "Desktop Application",
            description: "",
            rules: ["Teams up to 3 members.",
                    "Duration of the Hackathon is 1 week."]
        },
        {
            title: "Arduino Hackathon",
            field: "emb",
            header: "C++ & Arduino Game",
            description: "",
            rules: ["Teams up to 3 members.",
                    "Duration of the Hackathon is 1 week."]
        },
    ];
    const track = tracks.find(track => {
        return track.field == fieldName;
    })

    return (
        <div className="hackathon-page">
            <div className="header">
                {track.title}
            </div>  
            <section>
                <h1>{track.header}</h1>
                <p className="paragraph">&emsp; {track.description}</p>
            </section>
            <section>
                <h1> Rules </h1>
                <ul>
                    {track.rules.map(
                        (rule) => {
                            return (
                                <li>{rule}</li>
                            );
                        }
                    )}
                </ul>
            </section>
        </div>
    );
};

export default WorkshopField;
