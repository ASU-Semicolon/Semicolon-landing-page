import { useState } from 'react'
import './committee.css'

export default function Committee(props) {

    const [committee, setCommittee] = useState();

    async function fetchCommittee() {
        let response = await fetch('https://api.quotable.io/quotes/random' + props.path);
        let user = await response.json();
        setCommittee(user);
        console.log(committee);
    }

  return (
    <>
        <div className='committee'>
            <h1 style={{color: "white"}}>{committee == null? "" : committee[0].content}</h1>
            <button onClick={fetchCommittee}>click</button>
        </div>
    </>
  )
}