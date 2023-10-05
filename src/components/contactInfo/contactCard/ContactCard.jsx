import './contactCard.css'

export default function ContactCard(props) {
  return (
    <>
        <div className='contact-card'>
            <div className='contact-card-logo'>
                <img src={props.url} />
            </div>
            <div className='contact-card-text'>
                <h4 className='contact-card-title'>{props.title}</h4>
                <p className='contact-card-description'>{props.number}</p>
            </div>
        </div> 
    </>
    
  )
}