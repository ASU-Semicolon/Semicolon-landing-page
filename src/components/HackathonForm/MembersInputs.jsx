import React from "react";
import Input from "../forminput/forminput";
import Dropdownmenu from "../forminput/dropbox";
import './HackathonForm.css'
import Checkbox from "../forminput/checkbox";

export const MembersInputs = ({shown, title, reference}) => {
    return (
        <div className={"hackathon-form-inputs" + (shown ? " first" : "")} ref={reference}>
            <h1 className="form-subtitle">{title}</h1>
            { (title == "Team Info") ?
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
                    <Checkbox
                        label="react"
                        name="react"
                        id="react"
                    />
                    <Checkbox
                        label="node"
                        name="node"
                        id="node"
                    />
                    <Checkbox
                        label="express"
                        name="express"
                        id="express"
                    />
                </> 
                :
                <>
                    <Input
                        type="text"
                        label="Full Name"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="Phone Number"
                        name="phone"
                        id="phone-number"
                        placeholder="Your number"
                        pattern="^01\d{9}$"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        selectable={shown ? "" : "-1"}
                    />
                    <Dropdownmenu
                        label="Academic Level"
                        name="academic_level"
                        id="academiclevel"
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
                        name="college"
                        id="college"
                        placeholder="Your college / university"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="CV Link on Drive"
                        name="cv"
                        id="cv"
                        placeholder="A link to your CV"
                        selectable={shown ? "" : "-1"}
                    />
                    <Input
                        type="text"
                        label="Github Account"
                        name="github"
                        id="github"
                        placeholder="Your github account"
                        selectable={shown ? "" : "-1"}
                    />
                </>
            }
        </div>
    );
};
