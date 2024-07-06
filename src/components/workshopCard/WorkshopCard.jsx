import React from "react";
import { FaSlackHash } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./WorkshopCard.css";

export const WorkshopCard = ({ card, icon }) => {
    return (
        <div className="workshop-card-wrapper">
            <div className="workshop-card">
                <div>
                    <div className="workshop-card-header">
                        {icon}
                        {card.title}
                    </div>
                </div>
                <p className="card-info">
                    <FaSlackHash /> No. of sessions: {card.duration_in_sessions}
                </p>
                <p className="card-info">
                    <FaCalendarDays /> {card.sessions_per_week} Sessions per
                    week.
                </p>
                {card.state == "not-started" ? (
                    <Link to={`/workshop/${card.title}`} className="btn-enable">
                        Learn More
                    </Link>
                ) : (
                    <Link className="btn-disable">Comming Soon</Link>
                )}
            </div>
        </div>
    );
};
