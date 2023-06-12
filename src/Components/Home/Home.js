import { useState, useEffect } from "react";
import "./Home.css";
import avatar from "../../image/AvatarMaker.png";

const Home = () => {
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
        <div className="avatarContainer">
          <img src={avatar} alt="avatar" id="avatar" />
        </div>
      </div>
    </>
  );
};

export default Home;