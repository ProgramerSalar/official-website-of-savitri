
import church from "../assets/video/church.mp4"
import churning from "../assets/video/churning.mp4";




const ThirdVideo = () => {
  return (
    <div className='third-video-container'>



         <video autoPlay loop muted>
              <source src={church} type="video/mp4" />
            </video>
            

            <video autoPlay loop muted>
              <source src={churning} type="video/mp4" />
            </video>
         

            <video autoPlay loop muted>
              <source src={churning} type="video/mp4" />
            </video>
           



    </div>
  )
}


{/* <p className="prompt">
            <span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
            </p>

<p className="prompt">
<span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
</p>

<p className="prompt">
<span>Prompt:</span> <br/> A futuristic cityscape where humans and robots coexist, navigating through holographic markets and sky bridges
</p> */}



export default ThirdVideo