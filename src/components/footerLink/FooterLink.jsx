import "./FooterLink.css";

export default function FooterLink(props) {
    return (
        <>
            <a
                className="footer-link-container"
                target={props.target}
                href={props.href}
            >
                <img src={props.url} alt="" />
                <button className="footer-link-text"
                    onClick={() => {
                        props.handleScroll(props.href.substring(1));
                    }}
                >
                    {props.text}
                </button>
            </a>
        </>
    );
}
