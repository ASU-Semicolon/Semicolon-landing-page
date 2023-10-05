import './illustration.css'

export default function Illustration(props) {
  return (
    <>
      <div className={'background-container ' + props.class}>
        <img className='foreground-image' src={props.url} alt="" />
      </div>
    </>
  )
}