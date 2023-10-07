import './forminput.css'

export default function Input(props) {
    return (
      <>
      <div className='input-field'>
      <label htmlForfor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} required></input>
      </div>
      </>
  )
}