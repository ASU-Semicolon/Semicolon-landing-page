import './TitleAndParagraph.css'

export default function TitleAndParagraph(props) {
  return (
    <>
        <div className='text-container'>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
            <div className='button'>{props.button}</div>
        </div>
    </>
  )
}