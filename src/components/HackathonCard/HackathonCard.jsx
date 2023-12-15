import React from "react";
import './HackathonCard.css'

export const HackathonCard = ({
    title,
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
            <button className={buttonClass}>
                Join Now
            </button>
        </div>
    );
};
