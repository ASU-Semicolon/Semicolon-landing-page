import "./forminput.css";

export default function Input(props) {
    return (
        <>
            <div className="input-field">
                {props.multiline ? (
                    <textarea
                        id={props.id}
                        name={props.name}
                        placeholder={props.placeholder}
                        required
                    ></textarea>
                ) : (
                    <>
                        <label htmlFor={props.id}>{props.label}</label>
                        {props.labelOnly ? (
                            <span></span>
                        ) : (
                            <input
                                tabIndex = {props.selectable}
                                type={props.type}
                                id={props.id}
                                name={props.name}
                                placeholder={props.placeholder}
                                pattern={props.pattern ?? ".*"}
                                max={props.max}
                                min={props.min}
                                title={props.title}
                                required
                            ></input>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
