import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './committee.css'

export default function Committee() {

    const { committeeName } = useParams();

    const [committee, setCommittee] = useState();

    useEffect(() => {
      async function fetchData () {
        let response = await fetch('https://api.quotable.io/quotes/random');
        let user = await response.json();
        setCommittee(user);
      }
      fetchData();
    }, [])
      

  return (
    <>
      {committee == null? "" :
        <section className='committee-page-container'> 
          <div className='committee-main'>
            <div className="committee-name">
              <h1 className='committee-title committee-title-underline'>{committee[0].content}</h1>
              <img src= {committee[0].content} alt=""  className='committee-icon'/>
            </div>
            <p className='committee-description'>{committee[0].content}</p>
            <h1 className='committee-title'> <span className='committee-title-underline'>Who are</span> they</h1>
            <p className='committee-description'>{committee[0].content}</p>
            <h1 className='committee-title'> <span className='committee-title-underline'>what th</span>ey do</h1>
            <p className='committee-description'>{committee[0].content}</p>
            <h1 className='committee-title'> <span className='committee-title-underline'>want to</span> join them</h1>
            <p className='committee-description'>{committee[0].content}</p>
            <a href="/form" className='join-committee'>
              <button className='committee-btn'>join us</button>
            </a> 
          </div>
        </section>
      }
    </>
  )
}