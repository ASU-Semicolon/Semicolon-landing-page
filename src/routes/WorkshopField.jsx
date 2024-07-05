import React from "react";
import { useParams, Link } from "react-router-dom";
import "./event.css";
import cards from "./data"
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const WorkshopField = () => {
    const { fieldName } = useParams();
    const card = cards.find(card => {
        return card.title == fieldName;
    })

    return (
        <div className="hackathon-page">
            <div className="header">
                {card.title}
            </div>  
            {card.breif ?
                <section>
                    <p className="paragraph">&emsp; {card.breif}</p>
                </section>
            :
                <section>
                    <h1> Description </h1>
                    <p className="paragraph">&emsp; {card.description}</p>
                </section>
            }
            {card.objectives && 
                <section>
                    <h1> Objectives </h1>
                    <ul>
                        {card.objectives.map(
                            (item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                );
                            }
                        )}
                    </ul>
                </section>
            }
            <section>
                <h1> Content </h1>
                <ul>
                    {card.content.map(
                        (item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            );
                        }
                    )}
                </ul>
            </section>
            <section>
                <h1> Prerequisites </h1>
                <ul>
                    {card.prerequisites.map(
                        (item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            );
                        }
                    )}
                </ul>
            </section>
            <section>
                <h1> Number of Sessions </h1>
                <p className="paragraph">
                    &emsp; A total of {card.duration_in_sessions} sessions with {card.sessions_per_week} sessions a week.
                </p>
            </section>
            {/* <section>
                <h1> Date and Location </h1>
                <p className="paragraph">&emsp; <IoMdTime/> {card.start_date.toDateString()}</p>
                <p className="paragraph">&emsp; <IoLocationSharp/> {card.location}</p>
            </section> */}
            <section>
                <Link to="/form/workshops" target="_blank">
                    <button className="applyButton">Apply Now</button>
                </Link>
            </section>
        </div>
    );
};

export default WorkshopField;
