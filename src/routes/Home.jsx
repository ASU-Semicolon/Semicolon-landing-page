import TitleAndParagraph from "../components/titleandparagraph/TitleAndParagraph";
import Illustration from "../components/illustration/Illustration";
import Statistic from "../components/statistic/Statistic";
import Brief from "../components/brief/Brief";
import Card from "../components/card/card";
import Info from "../components/contactInfo/ContactInfo";
import Contactform from "../components/contactInput/ContactInput";
import { useEffect, useState } from "react";
import { API_URL } from "../keys.config";
import "./home-css/home.css";
import "./home-css/aboutAndContact.css";
import "./home-css/cards.css";
import { HashLoader } from "react-spinners";

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
                        <a href="https://www.facebook.com/SemiColon.team.asu">
                            <p className="left-bar-text">FACEBOOK</p>
                        </a>
                        <a href="https://www.linkedin.com/company/semicolon.org">
                            <p className="left-bar-text">LINKEDIN</p>
                        </a>
                        <a href="">
                            <p className="left-bar-text"></p>
                        </a>
                    </div>
                    <div className="left-content">
                        <TitleAndParagraph
                            title={[
                                <span key={1}>Make Your College Years Count</span>,
                                <span className="orange-text" key={2}>.</span>,
                            ]}
                            paragraph={
                                "Whether it’s joining a coding club, participating in hackathons, or contributing to open-source projects.\nCreate memories that will last a lifetime and build skills that will serve them well in the future.\nSo why not start today? Make your college years count with Semi Colon!"
                            }
                            button={"APPLY NOW"}
                            href="/form"
                        />
                        <div className="logo-container">
                            <img
                                src="src/assets/home-graphics/logo.svg"
                                width="183px"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="right-content">
                        <Illustration
                            url={"src/assets/home-graphics/home.png"}
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
                            paragraph={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur. Sed sed tristique purus. Nunc convallis, dolor ut porta ullamcorper, nibh ex dignissim turpis, vitae mattis tellus mauris eu nulla. Etiam dictum efficitur eros, a mollis nulla varius a. Curabitur pulvinar congue ultrices."
                            }
                            button={"Learn More"}
                            href="https://www.facebook.com/SemiColon.team.asu/posts/pfbid0eqbNgvA2E1yjKh5V6cjZYxr4z7h3x4pfcLkwJ1HQZMxhrzFapyRvFj2qymhh73udl"
                        />
                        <Brief
                            title="Our history"
                            description="rem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur."
                            url="src/assets/about-graphics/history.svg"
                        />
                        <Brief
                            title="Our Vision"
                            description="rem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur."
                            url="src/assets/about-graphics/vision.svg"
                        />
                    </div>
                    <div className="right-content">
                        <Illustration
                            url={"src/assets/about-graphics/about.png"}
                        />
                    </div>
                </div>

                <div className="committee-container">
                    <div className="committee-wrapper">
                        <TitleAndParagraph
                            className="committee-brief"
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
