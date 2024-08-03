import './About.css';

function About() {
    return (
        <div className='aboutPageContainer'>
            <div className='aboutBlock'>
                <img className='aboutImage' src={'./images/self_portrait.jpg'} alt='self_portrait' />
                <div className='aboutCaption'>Belmont, 2024</div>
                <div className='aboutText'>
                    Web engineer by day, Shawn Wang is a self-taught photographer and videographer in his free time.
                    Originally from mainland China, he now lives in Bay Area, California.
                    His work spans a wide range of genres with different visual mediums.
                    Whether on city streets, perilous mountain expeditions or against studio backdrop,
                    his lens focuses on the visceral moments and raw essence of each setting.
                </div>

            </div>
        </div>
    );
}

export default About;
