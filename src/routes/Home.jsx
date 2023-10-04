import '../css/home.css'

export default function Home() {
  return (
    <>
        <main className='content-container'>
            <div className="left-content">
                <div className='text-container'>
                    <h1>Hands-On Software Workshops<span className='orange-text'>.</span></h1>
                    <p>Our hands-on software workshops teach new coding skills you can apply right away. No prior experience required - just bring your laptop. Small class sizes ensures individualized attention</p>
                    <div className='button'>CHECK NOW</div>
                </div>
                <div className='logo-container'>
                    <img src="main-graphics/logo.svg" alt="" />
                </div>
            </div>
            <div className='right-content'>
                <div className="boxes-container">
                    <div className='boxes-vertical-bars'>
                        <img src="main-graphics/yellow box top.svg" alt="" />
                        <img src="main-graphics/red box.svg" alt="" />
                    </div>
                    <div className='boxes-vertical-bars'>
                        <img src="main-graphics/blue box.svg" alt="" />
                        <img src="main-graphics/yellow box bottom.svg" alt="" />
                    </div>
                    <div className='main-graphic'>
                        <img src="main-graphics/graphic-main.svg" alt="" />
                    </div>
                </div> 
            </div>
        </main>
    </>
  )
}