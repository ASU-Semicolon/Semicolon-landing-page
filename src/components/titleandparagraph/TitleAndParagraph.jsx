import './TitleAndParagraph.css'

export default function TitleAndParagraph(props) {
  return (
    <>
        <div className={'text-container ' + props.className}>
            <h1 className='main-title' id={props.titleId}>{props.title}</h1>
            <p className='main-paragraph'>{props.paragraph}</p>
            {props.button == "" ? "" : <button className='button'>{props.button}</button>}
        </div>
    </>
  )
}