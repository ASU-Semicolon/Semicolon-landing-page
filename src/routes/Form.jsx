import Input from "../components/forminput/forminput";
import Dropdownmenu from "../components/forminput/dropbox";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../keys.config";
import { ToastContainer, toast } from "react-toastify";
import FormBackgroundImage from "../assets/form-graphics/form-photo.png";
import "./form.css";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
    function showErrorToast(message, theme = "dark") {
        toast.error(message, { theme });
    }
    function showSuccessToast(message, theme = "dark") {
        toast.success(message, { theme });
    }

    const [committees, setCommittees] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}/committee`).then((res) => {
            res.json().then(({ data }) => {
                setCommittees(data.map((committee) => committee.title));
            });
        });
    }, []);

    const handleApplyFormSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        let applicant = {};
        for (let entry of form.entries()) {
            applicant[entry[0]] = entry[1];
        }
        fetch(`${API_URL}/applicant`, {
            method: "POST",
            body: JSON.stringify(applicant),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === "success") {
                    showSuccessToast("Your application has been submitted");
                    event.target.reset();
                } else {
                    showErrorToast(
                        "Phone or email has been used before, try again with new data"
                    );
                }
            })
            .catch((err) => {
                showErrorToast(err.message);
            });
    };

    const checkValid = (event) => {
        event.target.parentElement.classList.add("incorrect");
    };

    return (
        <>
            <ToastContainer />
            <h1 className="form-title mobile">Join Us Now</h1>
            <div className="form-main-page">
                {/* <div className="form-wrapper"> */}

                <div className="form-photo">
                    <h1 className="form-title">Join Us Now</h1>
                    <img src={FormBackgroundImage}></img>
                </div>
                <div className="form-inputs-wrapper">
                    <form
                        className="form-inputs"
                        onSubmit={handleApplyFormSubmit}
                    >
                        <Input
                            type="text"
                            label="Full Name"
                            name="name"
                            id="name"
                            placeholder="Your name"
                        />
                        <Input
                            type="text"
                            label="Phone Number"
                            name="phone"
                            id="phone-number"
                            placeholder="Your number"
                            pattern="^01\d{9}$"
                        />
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        />
                        <Dropdownmenu
                            type="text"
                            label="Department"
                            name="department"
                            id="department"
                            placeholder="Your department"
                            options={[
                                "Freshman",
                                "Electrical",
                                "Mechanical",
                                "Civil",
                                "Architecture",
                                "Other",
                            ]}
                        />
                        <Input
                            type="text"
                            label="Specialization"
                            name="specialization"
                            id="specialization"
                            placeholder="Your specialization"
                        />
                        <Dropdownmenu
                            label="Academic Year"
                            name="academic_year"
                            id="academicyear"
                            placeholder="Your academic year"
                            options={[
                                "Freshman",
                                "Sophomore",
                                "Junior",
                                "Senior 1",
                                "Senior 2",
                            ]}
                        />
                        <Dropdownmenu
                            label="First Preference"
                            name="first_preference"
                            id="firstchoice"
                            placeholder="First Preference"
                            options={committees}
                        />
                        <Input
                            name="first_preference_reason"
                            id="firstchoiceexperience"
                            placeholder="Reasons for applying"
                            multiline={true}
                        />
                        <Dropdownmenu
                            label="Second Preference"
                            name="second_preference"
                            id="secondchoice"
                            placeholder="Second Preference"
                            options={committees}
                        />
                        <Input
                            name="second_preference_reason"
                            id="secondchoiceexperience"
                            placeholder="Reasons for applying"
                            multiline={true}
                        />
                        <div className="form-experinece">
                            <Input
                                label="Previous Experience"
                                name="second_preference_experience"
                                id="secondchoiceexperience"
                                placeholder="Your previous experience"
                                labelOnly={true}
                            />
                            <Input
                                name="previousExperience"
                                id="secondchoiceexperience"
                                placeholder="Your previous experience"
                                multiline={true}
                            />
                        </div>

                        <button
                            type="submit"
                            id="submit-btn"
                            onClick={checkValid}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
