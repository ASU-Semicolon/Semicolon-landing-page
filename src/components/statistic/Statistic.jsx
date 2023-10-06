import './Statistic.css'

export default function Statistic(props) {
  return (
    <>
        <div className='stat'>
            <p className='stat-number'>{props.number}</p>
            <p className='stat-text'>{props.text}</p>
        </div>
    </>
  )
}