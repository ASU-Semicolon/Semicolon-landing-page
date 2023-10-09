import './contactInput.css'

export default function Contactform() {

   const handleContactUsSumbit = (event) => {
      event.preventDefault();
      event.target.reset();
   }

  return (
    <>
         <div id='form-background'>
         <form onSubmit={handleContactUsSumbit}>
             <div id='getinfo'>
                 <div id='name'>
                     <label htmlFor='username'>Your Name</label>
                     <input id='username' type='text' placeholder='Your Name' required></input>
                  </div>
                  <div id='email'>
                     <label htmlFor='useremail' >Your Email</label>
                     <input id='useremail' type='email' placeholder='Your Email' required></input>
                  </div>
             </div>
             <div className='your-message'>
             <label htmlFor='thought' id='message'>Your Message or Thought</label>
             <textarea id='thought' placeholder='Your Message or Thought or whatever...' required></textarea>
             </div>
             <button type='submit'>Submit</button>
            
      
          </form>
          </div>
     
   </>
  )
}