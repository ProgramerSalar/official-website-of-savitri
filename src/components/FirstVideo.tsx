import five from "../assets/video/campfire.mp4"

const FirstVideo = () => {
  return (
    <div className="first-video-section">
        <video autoPlay loop  preload="auto" muted>
              <source src={five} type="video/mp4" />
            </video>
            <p className="prompt">
                
            
            </p>
    </div>
  )
}

export default FirstVideo