import { Link } from "react-router-dom";
import { getCommitteeIcon } from "../../utils/iconExporter";
import "./card.css";

export default function Card(props) {
    return (
        <>
            <Link className="card-container" to={"/" + props.href}>
                <div className="card-text-container">
                    {props.disabled ? 
                    <h3 className="card-title">{props.title}</h3>
                    :
                    <>
                        <h3 className="card-title">{props.title + "\n" + props.subtitle}</h3>
                        <p className="card-banner">Open Now</p>    
                    </>
                    }
                    <div className="mobile-card-description">
                        <p className="card-description">{props.description}</p>
                        <img
                            className="card-image"
                            width="70px"
                            src={(props.disabled || !props.subtitle) ? getCommitteeIcon(props.title) : getCommitteeIcon(props.title+" "+props.subtitle)}
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
