import TitleAndParagraph from "../titleandparagraph/TitleAndParagraph";
import ContactCard from "./contactCard/ContactCard";
import EmailIcon from "../../assets/contact-graphics/Email.png";
import FacebookIcon from "../../assets/contact-graphics/Facebook.png";
import "./contactInfo.css";

export default function Info() {
    return (
        <>
            <div className="contact-information">
                <div className="left-content">
                    <TitleAndParagraph
                        title="Contact Us"
                        titleId="contact"
                        paragraph="We will be more than happy to hear from you whether it’s a question or a feedback or just some random thoughts that you want share just reach out and we will contact you as soon as we can."
                        button=""
                    />
                </div>
                <div className="right-content">
                    <div className="contact-cards-container">
                        <ContactCard
                            title="Facebook Messages"
                            number="Semicolon Page"
                            href="https://www.facebook.com/SemiColon.team.asu"
                            url={FacebookIcon}
                        />
                        <ContactCard
                            title="Email"
                            number="hr.semicolon.asu@gmail.com"
                            url={EmailIcon}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
