import './TitleAndParagraph.css'

export default function TitleAndParagraph(props) {
  return (
    <>
        <div className='text-container'>
            <h1 className='main-title'>{props.title}</h1>
            <p className='main-paragraph'>{props.paragraph}</p>
            <button className='button'>{props.button}</button>
        </div>
    </>
  )
}