import "./FooterLink.css";

export default function InternalFooterLink(props) {
    return (
        <>
            <button
                className="footer-link-container"
                onClick={() => {
                    props.handleScroll(props.target);
                }}
            >
                <img src={props.url} alt="" />
                <p className="footer-link-text">{props.text}</p>
            </button>
        </>
    );
}
