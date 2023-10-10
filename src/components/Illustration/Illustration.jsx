import "./Illustration.css";

export default function Illustration(props) {
    return (
        <>
            <div className={"background-container"}>
                <img className="foreground-image" src={props.url} alt="" />
            </div>
        </>
    );
}
