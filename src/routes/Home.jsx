import TitleAndParagraph from '../components/titleandparagraph/TitleAndParagraph'
import Illustration from '../components/illustration/Illustration'
import Statistic from '../components/statistic/Statistic'
import Brief from '../components/brief/Brief'
import Card from '../components/card/card'
import Info from '../components/contactInfo/ContactInfo'
import Contactform from '../components/contactInput/ContactInput'
import './home.css'

export default function Home() {

    const committees = [{
        href: 'web',
        title: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/AI.png'
    },{
        href: 'web',
        title: 'DIGITAL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/digital.png'
    },{
        href: 'web',
        title: 'ANALOG',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/analog.png'
    },{
        href: 'web',
        title: 'MOBLIE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/mobile.png'
    },{
        href: 'web',
        title: 'OOP & QT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/qt.png'
    },{
        href: 'web',
        title: 'C++ & DSA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/c++.png'
    },{
        href: 'web',
        title: 'BASIC DEV',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/basic dev.png'
    },{
        href: 'web',
        title: 'ADVANCED DEV',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/advanced dev.png'
    },{
        href: 'web',
        title: 'ARM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/embedded.png'
    },{
        href: 'web',
        title: 'AVT & RTOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/embedded.png'
    },{
        href: 'web',
        title: 'EMBEDDED C',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/c.png'
    },{
        href: 'web',
        title: 'FR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/fr.png'
    },{
        href: 'web',
        title: 'HR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/hr.png'
    },{
        href: 'web',
        title: 'PM & LOGISTICS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/pm.png'
    },{
        href: 'web',
        title: 'PR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/pr.png'
    },{
        href: 'web',
        title: 'MEDIA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        icon: 'src/assets/cards/media.png'
    },];
    console.log("link")

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
                        button={'APPLY NOW'}
                        href="/form"
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
                        href="/"
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

            <div className="committee-container">
                <div className="committee-wrapper">
                    <TitleAndParagraph
                        className='committee-brief'
                        title='Our Committees'
                        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
                        button=''
                    />
                    <div className="cards-container">
                        {committees.map((committee) => {
                            return <Card 
                                href={committee.href}
                                title = {committee.title}
                                description= {committee.description}
                                icon= {committee.icon}
                            />
                        })}
                    </div>
                </div>
            </div>

            <div className='contact-container'>
                <div className="left-content">
                    <Info />
                </div>
                <div className="right-content">
                    <Contactform />
                </div>
            </div>

        </main>
    </>
  )
}