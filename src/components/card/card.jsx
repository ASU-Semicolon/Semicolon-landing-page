import "./card.css";

export default function Card(props) {
    return (
        <>
            <div className="card-container">
                <div className="card-text-container">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-description">{props.description}</p>
                </div>
                <button className="button card-button">
                    <a className="card-link" href={"/" + props.href}>
                        LEARN MORE
                    </a>
                </button>
                <img
                    className="card-image"
                    width="70px"
                    src={props.icon}
                    alt=""
                />
            </div>
        </>
    );
}
