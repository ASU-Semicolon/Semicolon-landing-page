import React, { useRef, useEffect } from "react";
import Input from "../forminput/forminput";
import Dropdownmenu from "../forminput/dropbox";
import "./HackathonForm.css";
import Checkbox from "../forminput/checkbox";

export const MembersInputs = ({ shown, title, data }) => {
    const page = useRef();

    useEffect(() => {
        if (shown && data) {
            const inputsList = page.current.querySelectorAll("input, select");
            let inputsObj = {};
            for (let input of inputsList) {
                inputsObj[input.getAttribute("id")] = input;
            }
            if (title == "Team Info") {
                inputsObj["team_name"].value = data["team_name"];
                inputsObj["count"].value = data["count"];
                inputsObj["react"].checked = data["react"];
                inputsObj["node"].checked = data["node"];
                inputsObj["express"].checked = data["express"];
            } else {
                inputsObj["name"].value = data["name"];
                inputsObj["phone-number"].value = data["phone"];
                inputsObj["email"].value = data["email"];
                inputsObj["academiclevel"].value = data["academic_level"];
                inputsObj["college"].value = data["college"];
                inputsObj["cv"].value = data["cv"];
                inputsObj["github"].value = data["github"];
            }
        }
    });

    return (
        <div
            className={"hackathon-form-inputs" + (shown ? " first" : "")}
            ref={page}
        >
            <h1 className="form-subtitle">{title}</h1>
            {title == "Team Info" ? (
                <>
                    <Input
                        type="text"
                        label="Team Name"
                        name="team_name"
                        id="team_name"
                        placeholder="Your team name"
                    />
                    <Input
                        type="number"
                        label="Number of Members"
                        name="count"
                        id="count"
                        placeholder="2-5"
                        max="5"
                        min="2"
                    />
                    <Input
                        label="Technologies your team know"
                        labelOnly={true}
                    />
                    <Checkbox label="react" name="react" id="react" />
                    <Checkbox label="node" name="node" id="node" />
                    <Checkbox label="express" name="express" id="express" />
                </>
            ) : (
                <>
                    <Input
                        type="text"
                        label="Full Name"
                        name={shown ? "name" : ""}
                        id={shown ? "name" : ""}
                        placeholder="Your name"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="Phone Number"
                        name={shown ? "phone" : ""}
                        id={shown ? "phone-number" : ""}
                        placeholder="Your number"
                        pattern="^01\d{9}$"
                        selectable={shown ? "" : "-1"}
                        title="11 digits starting with 01"
                    />
                    <Input
                        type="email"
                        label="Email"
                        name={shown ? "email" : ""}
                        id={shown ? "email" : ""}
                        placeholder="Your email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        selectable={shown ? "" : "-1"}
                        title="user_name@domain"
                    />
                    <Dropdownmenu
                        label="Academic Level"
                        name={shown ? "academic_level" : ""}
                        id={shown ? "academiclevel" : ""}
                        placeholder="Your academic level"
                        options={[
                            { title: "Level One" },
                            { title: "Level Two" },
                            { title: "Level Three" },
                            { title: "Level Four" },
                            { title: "Level Five" },
                            { title: "Graduated" },
                        ]}
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="College / University"
                        name={shown ? "college" : ""}
                        id={shown ? "college" : ""}
                        placeholder="Your college / university"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="CV Link on Drive"
                        name={shown ? "cv" : ""}
                        id={shown ? "cv" : ""}
                        placeholder="A link to your CV"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="Github Account"
                        name={shown ? "github" : ""}
                        id={shown ? "github" : ""}
                        placeholder="Your github account"
                        selectable={shown ? "" : "-1"}
                    />
                </>
            )}
        </div>
    );
};
