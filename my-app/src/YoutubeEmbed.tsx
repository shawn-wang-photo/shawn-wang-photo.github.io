interface ComponentProps {
    embedId: string;
}

function YoutubeEmbed({ embedId }: ComponentProps) {
    return (
        <div className='youtubeEmbed'>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                style={{ border: 'none' }}
            />
        </div>
    );
}

export default YoutubeEmbed;