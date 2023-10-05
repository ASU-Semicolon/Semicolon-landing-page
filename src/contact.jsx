import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Contactinfo.jsx'
import Contactform from './Contactinput.jsx'
import './contact.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='layout'>
    <Info />
    <Contactform />
    </div>
  </React.StrictMode>,
)