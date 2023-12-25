import React from "react";
import { Link } from "react-router-dom";
import './HackathonCard.css'

export const HackathonCard = ({
    title,
    field,
    icon,
    content,
    buttonClass,
}) => {
    return (
        <div className="hackathon-card">
            <div className="hackathon-card-header">
                {icon}
                {title}
            </div>
            <p>{content}</p>
            <Link to={field} className={buttonClass}>
                Learn More
            </Link>
        </div>
    );
};
