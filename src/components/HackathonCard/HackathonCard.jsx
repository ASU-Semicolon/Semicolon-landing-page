import React from "react";
import { Link } from "react-router-dom";
import './HackathonCard.css'

export const HackathonCard = ({
    title,
    field,
    icon,
    subtitle,
    content,
    buttonClass,
}) => {
    return (
        <div className="hackathon-card">
            <div>
                <div className="hackathon-card-header">
                    {icon}
                    {title}
                </div>
                <p className="subtitle">{subtitle}</p>
            </div>
            <p>{content}</p>
            <Link to={field} className={buttonClass}>
                Learn More
            </Link>
        </div>
    );
};
