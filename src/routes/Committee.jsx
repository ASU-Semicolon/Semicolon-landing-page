import { useState } from 'react'
import './committee.css'

export default function Committee(props) {

    const [committee, setCommittee] = useState();

    async function fetchCommittee() {
        let response = await fetch('https://api.quotable.io/quotes/random');
        let user = await response.json();
        setCommittee(user);
        console.log(committee);
    }

  return (
    <>
        <section className='main'>
          <div className="name">
            <h1 className='title line'>{committee == null? "" : committee[0].content}</h1>
            <img src={committee == null? "" : committee[0].content} alt=""  className='icon'/>
            </div>
            
            <p className='description'>{committee == null? "" : committee[0].content}</p>
            <h1 className='title'> <span className='line'>Who are</span> they</h1>
            <p className='description'>{committee == null? "" : committee[0].content}</p>
            <h1 className='title'> <span className='line'>what th</span>ey do</h1>
            <p className='description'>{committee == null? "" : committee[0].content}</p>
            <h1 className='title'> <span className='line'>want to</span> join them</h1>
            <p className='description'>{committee == null? "" : committee[0].content}</p>




            <button  className='btn' onClick={fetchCommittee}>click</button>
        </section>
    </>
  )
}