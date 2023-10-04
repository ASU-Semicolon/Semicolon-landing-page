import TitleAndParagraph from '../components/titleandparagraph/TitleAndParagraph'
import Illustration from '../components/Illustration/Illustration'
import MainIllustrationDevs from '../components/Illustration/BackgroundDevs/MainIllustrationDevs'
import AboutIllustrationDevs from '../components/Illustration/BackgroundDevs/AboutIllustrationDevs'
import '../css/home.css'

export default function Home() {
  return (
    <>
        <main>
            <div className="content-container">
                <div className="left-content">
                    <TitleAndParagraph
                        title={['Hands-On Software Workshops',<span className="orange-text">.</span>]}
                        paragraph={'Our hands-on software workshops teach new coding skills you can apply right away. No prior experience required - just bring your laptop. Small class sizes ensures individualized attention'}
                        button={'CHECK NOW'}
                    />
                    <div className='logo-container'>
                        <img src="src/assets/home-graphics/logo.svg" alt="" />
                    </div>
                </div>
                <div className="right-content">
                    <Illustration
                        class='background-container1'
                        background={<MainIllustrationDevs />}
                        foreground={'src/assets/home-graphics/graphic-main.svg'}
                    />
                </div>
            </div>
            <div className="content-container">
                <div className="left-content">
                    <TitleAndParagraph
                        title={'Who We Are'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet vestibulum sem. Fusce nec varius magna. Mauris porta tempus mi eu efficitur. Sed sed tristique purus. Nunc convallis, dolor ut porta ullamcorper, nibh ex dignissim turpis, vitae mattis tellus mauris eu nulla. Etiam dictum efficitur eros, a mollis nulla varius a. Curabitur pulvinar congue ultrices.'}
                        button={'Learn More'}
                    />
                </div>
                <div className="right-content">
                    <Illustration
                        class='background-container2'
                        background={<AboutIllustrationDevs/>}
                        foreground={'src/assets/home-graphics/graphic-about.svg'}
                    />
                </div>
            </div>
        </main>
    </>
  )
}