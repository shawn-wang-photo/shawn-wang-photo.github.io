import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';
import { ReactComponent as InstagramIcon } from './icon/instagram.svg';

function NavigationBar() {

    const location = useLocation();
    const currPath = location.pathname;

    return (
        <div className="navigationBar">
            <div className="title">
                <Link className='navLink' to="/">
                    Shawn Wang
                </Link>
            </div>
            <div className="categories">
                <Link className='navLink' to="/street">
                    <div className={`category ${currPath === '/street' ? 'selected' : ''}`}>
                        STREET
                    </div>
                </Link>
                <Link className='navLink' to="/portraits">
                    <div className={`category ${currPath === '/portraits' ? 'selected' : ''}`}>
                        PORTRAITS
                    </div>
                </Link>
                <Link className='navLink' to="/outdoors">
                    <div className={`category ${currPath === '/outdoors' ? 'selected' : ''}`}>
                        OUTDOORS
                    </div>
                </Link>
                <Link className='navLink' to="/filmmaking">
                    <div className={`category ${currPath === '/filmmaking' ? 'selected' : ''}`}>
                        FILM MAKING
                    </div>
                </Link>
            </div>
            <div className='footer'>
                <Link className='navLink' to="/about">
                    <div className="about">
                        About
                    </div>
                </Link>
                <div className="instagramIcon">
                    <a target="_blank" href='https://www.instagram.com/shawn.wang.photography/' rel="noreferrer">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
