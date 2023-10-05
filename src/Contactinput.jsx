import './contactinput.css'

export default function Contactform() {
  return (
    <>

       <div id='form-background'>
         <form>
             <div id='getinfo'>
                 <div id='name'>
                     <label>Your Name</label>
                     <input type='text' placeholder='Your Name' required></input>
                  </div>
                  <div id='email'>
                     <label >Your Email</label>
                     <input type='email' placeholder='Your Email' required></input>
                  </div>
             </div>
             <label for='thought' id='message'>Your Message or Thought</label>
             <textarea id='thought' placeholder='Your Message or Thought or whatever...' required></textarea>
             <button type='submit'>Submit</button>
          </form>
      </div>
   </>
  )
}