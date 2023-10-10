import "./TitleAndParagraph.css";
import { useContext } from "react";
import { scrollContext } from "../../Context";

export default function TitleAndParagraph(props) {
    const { scrollRef } = useContext(scrollContext);

    return (
        <>
            <div className={"text-container " + props.className}>
                <h1
                    className="main-title"
                    id={props.titleId}
                    ref={(element) => scrollRef.current.push(element)}
                >
                    {props.title}
                </h1>
                <p className="main-paragraph">{props.paragraph}</p>
                {props.button == "" ? (
                    ""
                ) : (
                    <a href={props.href}>
                        <button className="button">{props.button}</button>
                    </a>
                )}
            </div>
        </>
    );
}
