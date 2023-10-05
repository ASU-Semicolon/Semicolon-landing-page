import './App.css'

export default function App() {
  return (
    <>
      <div className="nav-item logo" style={{float: "left", marginLeft: "6rem"}}>
        <a className="navbar-brand link-light" href="#">
          <img src="/public/LOGOO.png" alt="" width="50" height="50" className="d-inline-block align-text-top" style={{"float": "left", "marginTop": "-1rem"}}/>
          <p style={{paddingTop: "0.5rem"}}>Sem<span>;</span>Colon</p>
        </a>
        <p className="logtext">Debug Your <span>Soul</span><strong style={{fontWeight: "700", color: "orange"}}> .</strong></p>
      </div>
      
      <nav>
        <ul className="nav justify-content-end nav-item  ">
          <li className="nav-item">
            <a className="nav-link tab link-light" id="myTab" aria-current="page" href="#" >HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" id="myTab" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" id="myTab" href="#">COMMITTEES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" id="myTab" href="#">WORKSHOPS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light"id="myTab" href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>

      <footer className="text-white"  >
        <div className="nav-item logo" style={{float: "left", marginLeft: "50px"}}>
          <a className="navbar-brand link-light" href="#">
            <img src="public/LOGOO.png" alt="" width="50" height="50" className="d-inline-block align-text-top" style={{float: "left", marginTop: "1.5rem"}} />
            <p style={{paddingTop: "50px", marginBottom: "0.9rem"}}>Sem<span>;</span>Colon</p></a>
          <p className="logtext" style={{marginLeft: "50px"}}>Debug Your <span>Soul</span><strong style={{fontWeight: "700", color: "orange"}}> .</strong></p>
        </div>
        <div className=" nav justify-content-end nav-item" >
          <ul className="nav flex-column nav-item text-center" style={{marginLeft: "5%", marginRight: "2%", marginTop: "2%"}}>
            <h6 className="foot">FOLLOW US</h6>
            <li className="foot">
              <a className=" nav-link link-light" href="#">     
                <img src="/public/f_logo.png" alt="" width="10" height="10" className="d-inline-block align-text-top" />
              Facebook</a>
            </li>
            <li className="foot">
              <a className=" nav-link link-light" href="#" >
                <img src="/public/linkedin.jfif" alt="" width="10" height="10" className="d-inline-block align-text-top" style={{borderRadius: "10px"}} />
              Linkedin</a>
            </li>
            <li className="foot">
              <a className="nav-link link-light" href="#" >
                <img src="/public/instagram.png" alt="" width="10" height="10" className="d-inline-block align-text-top" style={{borderRadius: "10px"}} />
              Instagram</a>
            </li>
          </ul>
          <ul className="nav flex-column nav-item " style={{marginRight: "2%", marginTop: "2%"}}>
            <h6 className="foot" style={{marginLeft: "20%"}}>NAVIGATE</h6>
            <li className="foot">
              <a className=" nav-link link-light" href="#">     
                <img src="public/home.jfif" alt="" width="10" height="10" className="d-inline-block align-text-top" style={{borderRadius: "3px"}}  />
              Home</a>
            </li>
            <li className="foot">
              <a className=" nav-link link-light" href="#" >
                <img src="/public/about.jfif" alt="" width="10" height="10" className="d-inline-block align-text-top" style={{borderRadius: "3px"}} />
              About Us</a>
            </li>
            <li className="foot">
              <a className="nav-link link-light" href="#" >
                <img src="/public/committees.png" alt="" width="10" height="10" className="d-inline-block align-text-top" style={{borderRadius: "3px"}} />
              Committees</a>
            </li>
          </ul>
        </div> 
      </footer>
    </>
  )
}