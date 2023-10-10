import './FooterLink.css'

export default function ExternalFooterLink(props) {
  return (
    <>
      <a className='footer-link-container' target="_blank" href={props.href}>
        <img src={props.url} alt="" />
        <p className='footer-link-text'>{props.text}</p>
      </a>
    </>
  )
}