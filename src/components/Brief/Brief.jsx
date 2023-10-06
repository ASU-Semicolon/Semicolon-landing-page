import './Brief.css'

export default function Brief(props) {
  return (
    <>
        <div className='brief-container'>
            <div className='brief-icon'>
                <img src={props.url} alt="" />
            </div>
            <div className="brief-text">
                <p className='brief-title'>{props.title}</p>
                <p className='brief-description'>{props.description}</p>
            </div>
        </div>
    </>
  )
}