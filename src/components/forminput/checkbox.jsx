import "./forminput.css";

export default function Checkbox(props) {
    return (
        <>
            <div className="checkbox">
                <input
                    tabIndex = "-1"
                    type="checkbox"
                    id={props.id}
                    name={props.name}
                ></input>
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        </>
    );
}
