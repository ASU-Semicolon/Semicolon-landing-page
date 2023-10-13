import TitleAndParagraph from "../components/titleandparagraph/TitleAndParagraph";
import Illustration from "../components/illustration/Illustration";
import Statistic from "../components/statistic/Statistic";
import Brief from "../components/brief/Brief";
import Card from "../components/card/card";
import Info from "../components/contactInfo/ContactInfo";
import Contactform from "../components/contactInput/ContactInput";
import { useEffect, useState } from "react";
import { API_URL } from "../keys.config";
import { HashLoader } from "react-spinners";
import Logo from "../assets/home-graphics/logo.svg"
import HomeIcon from "../assets/home-graphics/home.png"
import HistoryIcon from "../assets/about-graphics/History.svg"
import AboutIcon from "../assets/about-graphics/about.png"
import VisionIcon from "../assets/about-graphics/Vision.svg"

import "./home-css/home.css";
import "./home-css/aboutAndContact.css";
import "./home-css/cards.css";

export default function Home() {
    const [committees, setCommittees] = useState();
    useEffect(() => {
        fetch(`${API_URL}/committee`)
            .then((res) => res.json())
            .then(({ data }) => setCommittees(data));
    }, []);

    return (
        <>
            <main>
            <div className='mobile-wrapper'>
                <div className="home-container">
                    <div className="left-bar">
                        <a href="https://www.facebook.com/SemiColon.team.asu" target="_blank">
                            <p className="left-bar-text">FACEBOOK</p>
                        </a>
                        <a href="https://www.linkedin.com/company/semicolon.org" target="_blank">
                            <p className="left-bar-text">LINKEDIN</p>
                        </a>
                        <a href="https://www.instagram.com/semicolon_asu" target="_blank">
                            <p className="left-bar-text">INSTAGRAM</p>
                        </a>
                    </div>
                    <div className="left-content">
                        <TitleAndParagraph
                            title={[
                                <span key={1}>Make Your College Years Count</span>,
                                <span className="orange-text" key={2}>.</span>,
                            ]}
                            titleId="home"
                            paragraph={
                                "Whether it’s joining a coding club, participating in hackathons, or contributing to open-source projects.\nCreate memories that will last a lifetime and build skills that will serve them well in the future.\nSo why not start today? Make your college years count with SemiColon!"
                            }
                            button={"APPLY NOW"}
                            href="/form"
                        />
                        <div className="logo-container">
                            <img
                                src={Logo}
                                width="120px"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="right-content">
                        <Illustration
                            url={HomeIcon}
                        />
                    </div>
                    <div className="stats-container">
                        <Statistic number="500" text="Workshop Students" />
                        <Statistic number="28" text="Instructors" />
                        <Statistic number="13" text="Workshops" />
                    </div>
                </div>

                <div className="about-container">
                    <div className="left-content">
                        <TitleAndParagraph
                            title={"Who We Are"}
                            titleId="about"
                            paragraph={
                                "We are a student activity at the Faculty of Engineering, Ain Shams University. Our goal is to strengthen and revitalize the students of the Computer, communication & mechatronics Departments in the different tracks"
                            }
                            button={"Learn More"}
                            href="https://www.facebook.com/SemiColon.team.asu/posts/pfbid0eqbNgvA2E1yjKh5V6cjZYxr4z7h3x4pfcLkwJ1HQZMxhrzFapyRvFj2qymhh73udl"
                        />
                        <Brief
                            title="Our history"
                            description="rem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur."
                            url={HistoryIcon}
                        />
                        <Brief
                            title="Our Vision"
                            description="rem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur."
                            url={VisionIcon}
                        />
                    </div>
                    <div className="right-content">
                        <Illustration
                            url={AboutIcon}
                        />
                    </div>
                </div>

                <div className="committee-container">
                    <div className="committee-wrapper">
                        <TitleAndParagraph
                            className="committee-brief"
                            titleId="committees"
                            title="Our Committees"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
                            button=""
                        />

                        <div className="cards-container">
                            <HashLoader
                                color={"#FFB000"}
                                loading={!committees}
                            />
                            {committees &&
                                committees.map((committee) => {
                                    return (
                                        <Card
                                            key={Math.random()}
                                            href={committee.title}
                                            title={committee.title}
                                            description={committee.brief}
                                            icon={null}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="left-content">
                        <Info />
                    </div>
                    <div className="right-content">
                        <Contactform />
                    </div>
                </div>
                </div>
            </main>
        </>
    );
}
