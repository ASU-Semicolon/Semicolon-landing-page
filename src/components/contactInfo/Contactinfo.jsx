import ContactCard from './contactCard/ContactCard'
import './contactInfo.css'

export default function Info() {
  return (
    <>
    <div className='contact-information'>  
      <h1 className='contact-title'>Contact Us</h1>
      <p className='contact-description'>We will be more than happy to hear from you whether it’s a question or a feedback or just some random thoughts that you want share just hit us and we will contact you as soon as we can.</p>
      <div className='contact-cards-container'>
        <ContactCard 
          title="Phone"
          number="+20112345680"
          url="src/assets/contact-graphics/phone.png"
        />
        <ContactCard 
          title="Email"
          number="semicolon@gmail.com"
          url="src/assets/contact-graphics/Email.png"
        />
        <ContactCard 
          title="WhatsApp"
          number="+20112345680"
          url="src/assets/contact-graphics/WhatsApp.png"
        />
      </div>
      </div>
    </>
    
  )
}