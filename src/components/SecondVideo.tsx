import React from "react";
import two from "../assets/video/two.mp4";
import three from "../assets/video/three.mp4";
import four from "../assets/video/four.mp4";
import one from "../assets/video/one.mp4";
import chicken from "../assets/video/chicken.mp4";

const SecondVideo = () => {
  return (
    <div className="second-video-container">
      <div className="five-video-are-found-in-this-container">
        <div className="first-column">
          <video autoPlay muted loop>
            <source src={two} type="video/mp4" />
          </video>

          <video autoPlay muted loop>
            <source src={three} type="video/mp4" />
          </video>
        </div>

        <div className="second-video-column">
          <video autoPlay muted loop>
            <source src={four} type="video/mp4" />
          </video>
        </div>

        <div className="third-video-column">
          <video autoPlay muted loop>
            <source src={one} type="video/mp4" />
          </video>

          <video autoPlay muted loop>
            <source src={chicken} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="prompt-container">
        <div className="prompt">
          <span>Prompt:</span>
          <p className="prompt">
            An enchanted forest where mythical creatures come to life at night,
            interacting with the remnants of a lost civilization.
          </p>

          <p className="prompt">
            A futuristic cityscape where humans and robots coexist, navigating
            through holographic markets and sky bridges
          </p>

          <p className="prompt">
            A futuristic cityscape where humans and robots coexist, navigating
            through holographic markets and sky bridges
          </p>

          <p className="prompt">
            A campfire burning with flames and embers, gradually increasing in
            size and intensity before dying down towards the end
          </p>

          <p className="prompt">
            A futuristic cityscape where humans and robots coexist, navigating
            through holographic markets and sky bridges
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondVideo;
