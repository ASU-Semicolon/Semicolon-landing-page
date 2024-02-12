import React, { useRef, useState } from "react";
import { MembersInputs } from "./MembersInputs";
import './HackathonForm.css'

export const HackathonForm = () => {

    const form = useRef();

    const pages = ["Team Info", "Leader Info", "Second Member", "Third Member", "Fourth Member", "Fifth Member"];
    const [pageIndex, setPageIndex] = useState(0);
    const [move, setMove] = useState("");
    const [formData, setFormData] = useState({count: 2})

    const nextPage = (event) => {
        event.preventDefault();
        event.target.classList.remove("incorrect");
        const form = new FormData(event.target);
        let data = {};
        for (let entry of form.entries()) {
            data[entry[0]] = entry[1];
        }
        if (pageIndex == 0) {
            setFormData({...data, "members":[]})
        } else {
            setFormData({...formData, "members":[...formData.members, data]})
        }
        if (pageIndex < formData.count) {
            setMove("move");
            setTimeout(() => {
                setPageIndex(pageIndex+1)
                setMove("")
                event.target.reset();
            }, 600)
        } else {
            event.target.reset();
            console.log(formData)
        }
    }

    const checkValid = (event) => {
        event.target.parentElement.classList.add("incorrect");
    }

    return (
        <div className="hackathon-form-wrapper">
            <form
                className="form-inputs"
                onSubmit={nextPage}
            >
                <div className={"form-slider " + move}>
                        <MembersInputs shown={true} title={pages[pageIndex]}/>
                        <form>
                        <MembersInputs shown={false} title={pages[pageIndex+1]} reference={form}/>
                        </form>
                </div>

                <button
                    type="submit"
                    id="hackathon-submit-btn"
                    onClick={checkValid}
                >
                    {pageIndex == formData.count ? "Submit" : "Next"}
                </button>
            </form>
        </div>
    );
};
