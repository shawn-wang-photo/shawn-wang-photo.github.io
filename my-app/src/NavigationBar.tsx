import './NavigationBar.css';
import { ReactComponent as InstagramIcon } from './icon/instagram.svg';

function NavigationBar() {
    return (
        <div className="navigationBar">
            <div className="title">Shawn Wang</div>
            <div className="categories">
                <div className='category'>STREET</div>
                <div className='category'>PORTRAITS</div>
                <div className='category'>OUTDOORS</div>
                <div className='category'>FILM MAKING</div>
            </div>
            <div className='footer'>
                <div className="about">About</div>
                <div className="instagramIcon"><InstagramIcon /></div>
            </div>
        </div>
    );
}

export default NavigationBar;