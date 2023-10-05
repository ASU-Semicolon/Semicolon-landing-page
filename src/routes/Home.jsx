import TitleAndParagraph from '../components/titleandparagraph/TitleAndParagraph'
import Illustration from '../components/illustration/Illustration'
import Statistic from '../components/statistic/Statistic'
import Brief from '../components/brief/Brief'

import Info from '../components/contactInfo/Contactinfo'
import Contactform from '../components/contactInput/Contactinput'
import './home.css'

export default function Home() {
  return (
    <>
        <main>
            
            <div className="home-container">
                <div className="left-bar">
                    <p className='left-bar-text'>FACEBOOK</p>
                    <p className='left-bar-text'>LINKEDIN</p>
                    <p className='left-bar-text'>INSTAGRAM</p>
                </div>
                <div className="left-content">
                    <TitleAndParagraph
                        title={['Make Your College Years Count',<span className="orange-text">.</span>]}
                        paragraph={'Whether it’s joining a coding club, participating in hackathons, or contributing to open-source projects.\nCreate memories that will last a lifetime and build skills that will serve them well in the future.\nSo why not start today? Make your college years count with Semi Colon!'}
                        button={'CHECK NOW'}
                    />
                    <div className='logo-container'>
                        <img src="src/assets/home-graphics/logo.svg" width="183px" alt="" />
                    </div>
                    
                </div>
                <div className="right-content">
                    <Illustration
                        url={'src/assets/home-graphics/home.png'}
                    />
                </div>
                <div className='stats-container'>
                    <Statistic number='2,000' text='Students Taught'/>
                    <Statistic number='30' text='Instructors'/>
                    <Statistic number='10' text='Workshops'/>
                </div>
            </div>
            

            <div className="about-container">
                <div className="left-content">
                    <TitleAndParagraph
                        title={'Who We Are'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur. Sed sed tristique purus. Nunc convallis, dolor ut porta ullamcorper, nibh ex dignissim turpis, vitae mattis tellus mauris eu nulla. Etiam dictum efficitur eros, a mollis nulla varius a. Curabitur pulvinar congue ultrices.'}
                        button={'Learn More'}
                    />
                    <Brief 
                        title='Our history'
                        description='rem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur.'
                        url='src/assets/about-graphics/history.svg'
                    />
                    <Brief
                        title='Our Vision'
                        description='rem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur.'
                        url='src/assets/about-graphics/vision.svg'                    
                    />
                </div>
                <div className="right-content">
                    <Illustration
                        url={'src/assets/about-graphics/about.png'}
                    />
                </div>
            </div>


            <div className='contact-container'>
                <Info />
                <Contactform />
            </div>

        </main>
    </>
  )
}