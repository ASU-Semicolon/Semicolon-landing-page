import "./forminput.css";
import "./dropbox.css";

export default function Dropdownmenu(props) {
    return (
        <>
            <div className="input-field">
                <label htmlFor={props.id}>{props.label}</label>
                <select name={props.name} id={props.id} required>
                    <option className="default" value="" hidden>
                        {props.placeholder}
                    </option>
                    <option value="Web">Web</option>
                    <option value="Embedded">Embedded</option>
                    <option value="Python">Python</option>
                </select>
            </div>
        </>
    );
}
