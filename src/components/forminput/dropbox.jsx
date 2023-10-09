import "./forminput.css";
import "./dropbox.css";

export default function Dropdownmenu(props) {
    return (
        <>
            <div className="input-field">
                <label htmlFor={props.id}>{props.label}</label>
                <select name={props.name} id={props.id} required>
                    <option
                        className="default"
                        value={props.placeholder}
                        hidden
                    >
                        {props.placeholder}
                    </option>
                    {props.options.map((option) => {
                        return <option value={option}>{option}</option>;
                    })}
                </select>
            </div>
        </>
    );
}
