import React, { useRef, useState } from "react";
import { MembersInputs } from "./MembersInputs";
import './HackathonForm.css'

export const HackathonForm = () => {

    const pages = ["Team Info", "Leader Info", "Second Member", "Third Member", "Fourth Member", "Fifth Member"];
    const [pageIndex, setPageIndex] = useState(0);
    const [move, setMove] = useState("");
    const [formData, setFormData] = useState([{"team_name":"", "count": ""}])

    const nextPage = (event) => {
        event.preventDefault();
        event.target.classList.remove("incorrect");
        const form = new FormData(event.target);
        let data = {};
        for (let entry of form.entries()) {
            data[entry[0]] = entry[1];
        }
        let newData = formData
        newData[pageIndex] = data
        setFormData(newData)
        if (pageIndex < formData[0].count) {
            setMove("move-forward");
            setTimeout(() => {
                setPageIndex(pageIndex+1);
                setMove("");
                event.target.reset();
            }, 600)
        } else {
            event.target.reset();
            setPageIndex(0)
            setFormData([{"team_name":"", "count": ""}])
            console.log(formData)
        }
    }

    const backPage = (event) => {
        event.target.parentElement.parentElement.classList.remove("incorrect");
        if (pageIndex > 0) {
            setMove("move-backward");
            setTimeout(() => {
                setPageIndex(pageIndex-1)
                setMove("")
                event.target.parentElement.parentElement.reset();    
            }, 600)
        }
    }

    const checkValid = (event) => {
        event.target.parentElement.parentElement.classList.add("incorrect");
    }

    return (
        <div className="hackathon-form-wrapper">
            <form
                className="form-inputs"
                onSubmit={nextPage}
            >
                <div className={"form-slider " + move}>
                    <form>
                        {
                        pageIndex > 0 ? 
                        <MembersInputs shown={false} title={pages[pageIndex-1]}/> :
                        <MembersInputs shown={false} title=""/>
                        }
                    </form>
                    <MembersInputs shown={true} title={pages[pageIndex]} data={formData[pageIndex]}/>
                    <form>
                        <MembersInputs shown={false} title={pages[pageIndex+1]}/>
                    </form>
                </div>
                
                <div className="form-buttons">
                    <button
                        type="button"
                        id="hackathon-back-btn"
                        onClick={backPage}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        id="hackathon-submit-btn"
                        onClick={checkValid}
                    >
                        {(pageIndex > 0) && (pageIndex == formData[0].count) ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};
