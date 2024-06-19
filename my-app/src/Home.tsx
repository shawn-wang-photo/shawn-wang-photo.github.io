import { useEffect, useState } from 'react';
import './Home.css'
import { HOME_IMAGES } from './constants';

function Home() {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % HOME_IMAGES.length);
        }, 5000)

        return () => {clearInterval(interval);}
    }, []);

    return (
        <div className="homePageContainer">
            <div className={`imageContainer fadeIn`} key={index}>
                <img className="homeImage" src={HOME_IMAGES[index].src} alt="cover_image"/>
                <div className="caption">{HOME_IMAGES[index].caption}</div>
            </div>
        </div>
    ); 
}

export default Home;
