import './FooterLink.css'

export default function FooterLink(props) {
  return (
    <>
      <a className='footer-link-container' target={props.target} href={props.href}>
        <img src={props.url} alt="" />
        <p className='footer-link-text'>{props.text}</p>
      </a>
    </>
  )
}