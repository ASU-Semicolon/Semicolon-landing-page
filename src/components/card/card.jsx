import './card.css'

export default function Card(props) {
  return (
    <>
        <div className='card-container'>
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-description'>{props.description}</p>
            <button className='button card-button'><a href="/">LEARN MORE</a></button>
            <img className='card-image' width="70px" src={props.url} alt="" />
        </div>
    </>
  )
}