import "./TitleAndParagraph.css";
import { Link } from "react-router-dom";

export default function TitleAndParagraph(props) {

    return (
        <>
            <div className={"text-container " + props.className}>
                <h1
                    className="main-title"
                    id={props.titleId}
                >
                    {props.title}
                </h1>
                <p className="main-paragraph">{props.paragraph}</p>
                {props.button == "" ? (
                    ""
                ) : (
                    <Link to={props.href}>
                        <button className="button">{props.button}</button>
                    </Link>
                )}
            </div>
        </>
    );
}
