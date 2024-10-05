import './Street.css'

// Define an interface for the photo data
interface Photo {
    src: string;
    caption: string;
}

const photos: Photo[] = [
    {
        caption: "Image1's alt text",
        src: "./images/birds.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/santa_cruz_boat.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/foster_city.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/mission.jpeg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/santa_cruz.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/vegas_double_exposure.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/flag.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/grand_street.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/golden_gate_bird.jpg",
    },
    {
        caption: "Image2's alt text",
        src: "./images/pride.jpg",
    },
    {
        caption: "Image3's alt text",
        src: "./images/women_march.jpg",
    },
  ];
;

  
  function Street() {

    return (
        <div className="streetPageContainer">
            <div className="grid">  
                {photos.map((photo, index) => (
                <div className="photoItem" key={index}>
                    <img src={photo.src} alt={photo.caption} />
                </div>
                ))}
            </div>
        </div>
    );
  };
  
  export default Street;

