import { Link } from "react-router-dom";
import { getCommitteeIcon } from "../../utils/iconExporter";
import "./card.css";

function makeTitle(title, breakPoint) {
    const arr = title.split(" ")
    if (arr.length > 1) {
        arr[breakPoint] = "\n" + arr[breakPoint]
        console.log(arr.join(" "))
    }
    return arr.join(" ")
}

export default function Card(props) {
    return (
        <>
            <Link className="card-container" to={"/" + props.href}>
                <div className="card-text-container">
                    <h3 className="card-title">{makeTitle(props.title, props.breakPoint)}</h3>
                    {!props.disabled && <p className="card-banner">Open Now</p>}
                    <div className="mobile-card-description">
                        <p className="card-description">{props.description}</p>
                        <img
                            className="card-image"
                            width="70px"
                            src={getCommitteeIcon(props.title)}
                            alt=""
                        />
                    </div>
                </div>
                <button className="button card-button">
                    <Link className="card-link" to={"/" + props.href}>
                        LEARN MORE
                    </Link>
                </button>
            </Link>
        </>
    );
}
