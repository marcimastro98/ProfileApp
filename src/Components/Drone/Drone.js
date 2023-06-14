import "./Drone.css";
import youtube from "../../image/youtube.png";

const Drone = () => {
  return (
    <>
      <div className="droneSection">
        <div id="title">
          <h1> Drone Section </h1>
        </div>
        <p>
          Stay tuned to see my video! Or you can see it on my YouTube channel!
          :)
          <a href="https://www.youtube.com/@marcellomastroeni5434">
            <img src={youtube} alt="youtube" />
            <p>Visit Me!</p>
          </a>
        </p>
      </div>
    </>
  );
};

export default Drone;
