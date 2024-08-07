import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../keys.config";
import { HashLoader } from "react-spinners";
import "./committee.css";
import LoadingData from "../components/loadingData/loadingData.component";
import { CommitteesContext } from "../contexts/committees.context.jsx";

export default function Committee() {
    const { committeeName } = useParams();
    const { isFetching, committees } = useContext(CommitteesContext);

    const [committee, setCommittee] = useState(null);
    useLayoutEffect(() => {
        setCommittee(committees.find((c) => c.title === committeeName));
    }, [committees]);

    if (isFetching) return <LoadingData isLoading={isFetching} />;

    return (
        <>
            <section className="committee-page-container">
                <HashLoader color={"#FFB000"} loading={!committee} />
                {committee && (
                    <div className="committee-main">
                        <div className="committee-name">
                            <h1 className="committee-title committee-title-underline">
                                {committee.title}
                            </h1>
                            {/* <img src= {committee.content} alt=""  className='committee-icon'/> */}
                        </div>
                        <p className="committee-description">
                            {committee.description}
                        </p>
                        <h1 className="committee-title committee-title-underline">
                            Board Members
                        </h1>
                        <div className="board-members">
                            {committee.director && (
                                <p className="committee-description">
                                    <span className="bold">
                                        {committee.director}:
                                    </span>{" "}
                                    Director of {committee.sector}
                                </p>
                            )}
                            {committee.vice_director && (
                                <p className="committee-description">
                                    <span className="bold">
                                        {committee.vice_director}:
                                    </span>{" "}
                                    Vice Director of {committee.sector}
                                </p>
                            )}
                            {committee.heads &&
                                committee.heads.map((head) => (
                                    <p
                                        className="committee-description"
                                        key={Math.random()}
                                    >
                                        <span className="bold">{head}:</span>{" "}
                                        Head of {committee.title}
                                    </p>
                                ))}
                            {committee.vice_heads &&
                                committee.vice_heads.map((vice_head) => (
                                    <p
                                        className="committee-description"
                                        key={Math.random()}
                                    >
                                        <span className="bold">
                                            {vice_head}:{" "}
                                        </span>
                                        Vice Head of {committee.title}
                                    </p>
                                ))}
                        </div>
                        {committee.prerequisites && (
                            <>
                                <h1 className="committee-title committee-title-underline">
                                    Prerequisites
                                </h1>
                                <ul>
                                    {committee.prerequisites.map(
                                        (prerequisite) => (
                                            <li
                                                key={Math.random()}
                                                className="prerequisite"
                                            >
                                                {" "}
                                                {prerequisite}{" "}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </>
                        )}
                        <h1 className="committee-title committee-title-underline">
                            What We Do
                        </h1>
                        <p className="committee-description">
                            {committee.brief}
                        </p>
                        <Link to="/form/members" className="join-committee">
                            <button className="committee-btn">join us</button>
                        </Link>
                    </div>
                )}
            </section>
        </>
    );
}
