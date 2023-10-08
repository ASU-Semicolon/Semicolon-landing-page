import Input from '../components/forminput/forminput'
import Dropdownmenu from"../components/forminput/dropbox" 
import './form.css'

export default function Home() {
  const handleApplyFormSumbit = async (event) => {
    event.preventDefault();
    event.target.reset();
    const ay7aga = await fetch("");
    const ay7aga2 = await ay7aga.json();
  }
  return (
    <>
       <div className='form-main-page'>
        <div className='form-photo'>
        <img src='src/assets/form-graphics/form-photo.png'></img>
        </div>
        <div className='form-inputs-wrapper'>
         <form className='form-inputs' onSubmit={handleApplyFormSumbit}>
            <Input type='text' label='Full Name'name="name" id="name" placeholder='Your name'/>
            <Input type='text'label='Department'name="department" id="department" placeholder='Your department'/>
            <Input type='number' label='Phone Number' name='phone-number' id='phone-number' placeholder='Your number'/>
            <Input type='email'label='Email' name='email' id='email' placeholder='Your email'/>
            <Dropdownmenu label="First Preferance" name='firstchoice' id='firstchoice' placeholder='First Preferance'/>
            <Dropdownmenu label="Second Preferance" name='secondchoice' id='secondchoice' placeholder='Second Preferance'/>
            <Input type='text'label='Academic Year' name='academicyear' id='academicyear' placeholder='Your academic year'/>
            <button type='submit' id='submit-btn'>Submit</button>
         </form>
         </div>
      </div>
    </>
  )
}