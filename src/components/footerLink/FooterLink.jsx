import './FooterLink.css'

export default function FooterLink(props) {
  return (
    <>
      <div className="footer-link-container">
        <img src={props.url} alt="" />
        <p className='footer-link-text'>{props.text}</p>
      </div>
    </>
  )
}