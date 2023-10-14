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
                            {props.labelOnly ? (<span></span>) : (
                            <input
                                type={props.type}
                                id={props.id}
                                name={props.name}
                                placeholder={props.placeholder}
                                maxLength={props.maxLength}
                                min={props.min}
                                required
                            ></input>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
