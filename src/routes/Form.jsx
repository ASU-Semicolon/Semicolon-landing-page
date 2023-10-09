import Input from "../components/forminput/forminput";
import Dropdownmenu from "../components/forminput/dropbox";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../keys.config";
import { ToastContainer, toast } from "react-toastify";
import "./form.css";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
    showErrorToast(message, theme = "dark") {
      toast.error(message, {theme});
    }
    showSuccessToast(message, theme = "dark") {
      toast.success(message, {theme});
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
        form.entries().forEach((entry) => {
            applicant[entry[0]] = entry[1];
        });
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
                    showErrorToast(res.message);
                }
            })
            .catch((err) => {
                showErrorToast(err.message);
            });
    };

    return (
        <>
            <ToastContainer />
            <div className="form-main-page">
                <div className="form-photo">
                    <img src="src/assets/form-graphics/form-photo.png"></img>
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
                            label="Department"
                            name="department"
                            id="department"
                            placeholder="Your department"
                        />
                        <Input
                            type="number"
                            label="Phone Number"
                            name="phone"
                            id="phone-number"
                            placeholder="Your number"
                        />
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                        />
                        <Dropdownmenu
                            label="First Preferance"
                            name="first_preference"
                            id="firstchoice"
                            placeholder="First Preferance"
                            options={committees}
                        />
                        <Input
                            label="First Preferance Previous Experience"
                            name="first_preference_experience"
                            id="firstchoiceexperience"
                            placeholder="Your previous experience"
                            multiline={true}
                        />
                        <Dropdownmenu
                            label="Second Preferance"
                            name="second_preference"
                            id="secondchoice"
                            placeholder="Second Preferance"
                            options={committees}
                        />
                        <Input
                            label="Second Preferance Previous Experience"
                            name="second_preference_experience"
                            id="secondchoiceexperience"
                            placeholder="Your previous experience"
                            multiline={true}
                        />
                        <Input
                            type="text"
                            label="Academic Year"
                            name="academic_year"
                            id="academicyear"
                            placeholder="Your academic year"
                        />
                        <button type="submit" id="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
