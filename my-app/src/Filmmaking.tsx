import './Filmmaking.css';
import YoutubeEmbed from './YoutubeEmbed';

function Filmmaking() {
    return (
        <div className='filmmakingPageContainer'>
            <div className='videoBlock' key='idhymYvRhW0'>
                <YoutubeEmbed embedId='idhymYvRhW0' />
                <div className='videoTitle'>
                    Hold On Maria, We're Gonna Dance(Kinda Cover) - Bear Bleach
                </div>
                <div className="videoDescription">
                    August 2023. <a target='_blank' href='https://www.youtube.com/@yifan1121' rel="noreferrer">Yifan</a>, Qifang and I took on a mission filming a live session for a local band at Guitar War studio in San Jose.
                    The band is called <a href='https://www.youtube.com/channel/UC4Kzi8kaJmk77Z_3yzooZmQ' target='_blank' rel="noreferrer">Bear Bleach</a> and it has four talented and passionate members, with Michael being the vocal and playing guitar, Jonathan on bass, Brian on drum and Zihao on synth and keyboard.
                </div>
            </div>
            <div className='videoBlock' key='pmws__OR_Vs'>
                <YoutubeEmbed embedId='pmws__OR_Vs' />
                <div className='videoTitle'>
                    Dead Sound - The Raveonettes Tour
                </div>
                <div className="videoDescription">
                    June 2024. I made a small documentary style music video for The Raveonettes during their tour in San Francisco. Footage and audio are recorded with a simple Panasonic camcorder.
                    The style of the editing is heavily influenced by the tour diaries from <a href='https://www.youtube.com/@theraveonettes/featured' rel='noreferrer' target="_blank">The Raveonettes Youtube channel</a> and other tour documentaries. 
                </div>
            </div>
        </div>
    );
}

export default Filmmaking;
