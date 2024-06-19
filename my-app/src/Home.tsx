import './Home.css'

function Home() {
    return (
        <div className="homePageContainer">
            <div className="imageContainer">
                <img className="homeImage" src={"./images/santa_cruz.jpg"} alt="cover_image"/>
                <div className="caption">Santa Cruz, 2022</div>
            </div>
        </div>
    ); 
}

export default Home;
