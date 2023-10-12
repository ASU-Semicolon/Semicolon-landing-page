import TitleAndParagraph from "../titleandparagraph/TitleAndParagraph";
import ContactCard from "./contactCard/ContactCard";
import PhoneIcon from "../../assets/contact-graphics/phone.png";
import EmailIcon from "../../assets/contact-graphics/Email.png";
import WhatsAppIcon from "../../assets/contact-graphics/WhatsApp.png";
import "./contactInfo.css";

export default function Info() {
    return (
        <>
            <div className="contact-information">
                <TitleAndParagraph
                    title="Contact Us"
                    titleId="contact"
                    paragraph="We will be more than happy to hear from you whether it’s a question or a feedback or just some random thoughts that you want share just hit us and we will contact you as soon as we can."
                    button=""
                />
                <div className="contact-cards-container">
                    <ContactCard
                        title="Phone"
                        number="+20112345680"
                        url={PhoneIcon}
                    />
                    <ContactCard
                        title="Email"
                        number="semicolon@gmail.com"
                        url={EmailIcon}
                    />
                    <ContactCard
                        title="WhatsApp"
                        number="+20112345680"
                        url={WhatsAppIcon}
                    />
                </div>
            </div>
        </>
    );
}
