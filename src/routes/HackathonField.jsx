import React from "react";
import { useParams } from "react-router-dom";
import "./hackathon.css";

const HackathonField = () => {
    const { fieldName } = useParams();
    const cards = [
        {
            title: "Web Development Hackathon",
            field: "web",
        },
        {
            title: "Software Hackathon",
            field: "sw",
        },
        {
            title: "Embedded Hackathon",
            field: "emb",
        },
    ];
    const card = cards.find(card => {
        return card.field == fieldName;
    })

    return (
        <div className="hackathon-page">
            <div className="header">
                {card.title}
            </div>  
            <section>

            </section>
        </div>
    );
};

export default HackathonField;
