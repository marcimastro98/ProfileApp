import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./Home.css";
import avatar from "../../image/AvatarMaker.png";
import Drone from "../Drone/Drone";
import Coding from "../Coding/Coding";
import Contact from "../Contact/Contact";

const Home = forwardRef((props, ref) => {
  const [typedText, setTypedText] = useState("");
  const text = `H.ello, my name is Marcello, and I'm a computer engineer. I served in
    the Italian Army as a soldier before deciding to pursue my studies in
    Object-Oriented Programming (OOP). In addition to my passion for
    programming, I have a keen interest in various hobbies. I thoroughly
    enjoy playing chess, as it challenges my strategic thinking and
    problem-solving abilities. When I'm not engrossed in coding, you'll
    often find me on the football field, honing my skills and sharing my
    love for the sport. Furthermore, I also take great pleasure in
    piloting my drone, capturing breathtaking aerial shots and exploring
    the world from a unique perspective. I decided to create this personal
    portfolio in my free time, to summarize my personal skills and
    hobbies.`;
  const refs = {
    droneRef: useRef(null),
    codingRef: useRef(null),
    aboutRef: useRef(null),
  };

  useImperativeHandle(ref, () => ({
    scrollToSection(section) {
      switch (section) {
        case "drone":
          refs.droneRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "coding":
          refs.codingRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "contact":
          refs.aboutRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    },
  }));

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(timer);
      } else {
        setTypedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  return (
    <>
      <div className="pageContainer">
        <div className="presentationContainer">
          <div id="terminalBar">
            <div id="terminalClose"></div>
            <div id="terminalReduce"></div>
            <div id="terminalMinimize"></div>
          </div>
          <p>{typedText.replace("undefined", "")}</p>
        </div>
        <div className="profile">
          <div className="avatarContainer">
            <img src={avatar} alt="avatar" id="avatar" />
          </div>
          <div className="profileInfo">
            <ul>
              <div>
                <li>Computer Engineer&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li>Full Stack Developer&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li>Drone Pilot&nbsp;&nbsp;&nbsp;&nbsp;</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="droneContainer" ref={refs.droneRef}>
          <Drone></Drone>
        </div>
        <div className="codingContainer" ref={refs.codingRef}>
          <Coding></Coding>
        </div>
        <div className="contactContainer" ref={refs.aboutRef}>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
});

export default Home;
