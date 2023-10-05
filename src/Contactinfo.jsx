import './contactinfo.css'

export default function Info() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>We will be more than happy to hear from you whether it’s a question or a feedback or just some random thoughts that you want share just hit us and we will contact you as soon as we can.</p>
      <div className='container'>
        <div className='info'><div className='logo'><img src='Phone.png'></img></div><div className='contact-info'><h4>Phone</h4><div>+20112345680</div></div></div> 
        <div className='info'><div className='logo'><img src='Email.png'></img></div><div className='contact-info'><h4>Email</h4><div>semicolon@gmail.com</div></div></div> 
        <div className='info'><div className='logo'><img src='WhatsApp.png'></img></div><div className='contact-info'><h4>WhatsApp</h4><div>+20112345680</div></div></div> 
      </div>
    </>
    
  )
}