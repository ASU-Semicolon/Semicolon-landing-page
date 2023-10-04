import './illustration.css'

export default function Illustration(props) {
  return (
    <>
      <div className={props.class + ' background-container'}>
        {props.background}
        <div className='main-graphic'>
          <img className='foreground-image' src={props.foreground} alt="" />
        </div>
      </div>
    </>
  )
}