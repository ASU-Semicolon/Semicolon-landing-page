import "./FooterLink.css";

export default function FooterLink(props) {
    return (
        <>
            <a
                className="footer-link-container"
                target={props.target || null}
                href={props.href || null}
            >
                <img src={props.url} alt="" />
                <button className="footer-link-text"
                    onClick={() => {
                        props.handleScroll(props.scrollTo);
                    }}
                >
                    {props.text}
                </button>
            </a>
        </>
    );
}
