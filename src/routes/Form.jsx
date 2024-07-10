import Input from "../components/forminput/forminput";
import Dropdownmenu from "../components/forminput/dropbox";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../keys.config";
import { ToastContainer, toast } from "react-toastify";
import FormBackgroundImage from "../assets/form-graphics/form-photo.png";
import "./form.css";
import "react-toastify/dist/ReactToastify.css";
import { CommitteesContext } from "../contexts/committees.context.jsx";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

export default function Home() {
    const { formRoute } = useParams();
    function showErrorToast(message, theme = "dark") {
        toast.error(message, { theme });
    }
    function showSuccessToast(message, theme = "dark") {
        toast.success(message, { theme });
    }

    const workshops = [
        { title: "C Programming" },
        { title: "Digital Design" },
        { title: "ARM" },
        { title: "AVR" },
        { title: "NodeJS" },
        { title: "ReactJS" },
        { title: "Cybersecurity" },
    ];
    const { committees } = useContext(CommitteesContext);
    const [sortedCommittees, setSortedCommittees] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        let data = committees?.sort((a, b) => (b.disabled ? -1 : 1));
        setSortedCommittees(
            data.map((committee) => {
                return {
                    title: committee.title,
                    disabled: committee.disabled,
                };
            }),
        );
        console.log(sortedCommittees);
    }, [committees]);

    const handleApplyFormSubmit = async (event) => {
        event.preventDefault();
        event.target.classList.remove("incorrect");
        const form = new FormData(event.target);
        let applicant = {};
        for (let entry of form.entries()) {
            applicant[entry[0]] = entry[1];
        }
        applicant["event"] = "workshops 24";
        applicant["type"] =
            formRoute == "members"
                ? "member"
                : formRoute == "workshops"
                  ? "student"
                  : "";
        setIsSubmitting(true);
        fetch(`${API_URL}/api/candidates`, {
            method: "POST",
            body: JSON.stringify(applicant),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setIsSubmitting(false);
                if (res.statusCode == 400) {
                    showErrorToast(res.message[0]);
                } else {
                    showSuccessToast("Your application has been submitted");
                    event.target.reset();
                }
            })
            .catch((err) => {
                setIsSubmitting(false);
                showErrorToast(err.message);
            });
    };

    const checkValid = (event) => {
        event.target.parentElement.classList.add("incorrect");
    };

    return (
        <>
            <ToastContainer />
            {formRoute == "members" ? (
                <h1 className="form-title mobile">Join Us Now</h1>
            ) : formRoute == "workshops" ? (
                <h1 className="form-title">Apply to a Workshop!</h1>
            ) : (
                <></>
            )}
            <div className="form-main-page">
                {/* <div className="form-wrapper"> */}

                {formRoute == "members" && (
                    <div className="form-photo">
                        <h1 className="form-title">Join Us Now</h1>
                        <img src={FormBackgroundImage}></img>
                    </div>
                )}
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
                        <Input
                            type="text"
                            label="College"
                            name="college"
                            id="college"
                            placeholder="Your college"
                        />
                        <Dropdownmenu
                            type="text"
                            label="Department"
                            name="department"
                            id="department"
                            placeholder="Your department"
                            options={[
                                { title: "Freshman" },
                                { title: "Electrical" },
                                { title: "Mechanical" },
                                { title: "Civil" },
                                { title: "Architecture" },
                                { title: "Other" },
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
                                { title: "freshman (1st year)" },
                                { title: "sophomore (2nd year)" },
                                { title: "junior (3rd year)" },
                                { title: "senior 1 (4th year)" },
                                { title: "senior 2 (5th year)" },
                                { title: "graduated" },
                                { title: "other" },
                            ]}
                        />
                        <Dropdownmenu
                            label="First Preference"
                            name="first_preference"
                            id="first_preference"
                            placeholder="First Preference"
                            options={
                                formRoute == "members"
                                    ? sortedCommittees
                                    : formRoute == "workshops"
                                      ? workshops
                                      : []
                            }
                        />
                        <Input
                            name="first_preference_reason"
                            id="first_preference_reason"
                            placeholder="Reasons for applying"
                            multiline={true}
                        />
                        <Dropdownmenu
                            label="Second Preference"
                            name="second_preference"
                            id="second_preference"
                            placeholder="Second Preference"
                            options={
                                formRoute == "members"
                                    ? sortedCommittees
                                    : formRoute == "workshops"
                                      ? workshops
                                      : []
                            }
                        />
                        <Input
                            name="second_preference_reason"
                            id="second_preference_reason"
                            placeholder="Reasons for applying"
                            multiline={true}
                        />
                        <div className="form-experinece">
                            <Input
                                label="Prev. Experience or Drive Link to Your CV"
                                name="previous_experience"
                                id="previous_experience"
                                placeholder="Your previous experience"
                                labelOnly={true}
                            />
                            <Input
                                name="previous_experience"
                                id="previous_experience"
                                placeholder="Your previous experience or drive link to your CV"
                                multiline={true}
                            />
                        </div>

                        <button
                            type={isSubmitting ? "button" : "submit"}
                            id="submit-btn"
                            className={isSubmitting ? "submitting" : ""}
                            onClick={checkValid}
                        >
                            <ScaleLoader
                                color={"#000000"}
                                loading={isSubmitting}
                                height={20}
                            />
                            {isSubmitting ? "" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
