import "./Coding.css";
import java from "../../image/java-logo-1.png";
import javascript from "../../image/js.png";
import typescript from "../../image/typescript.png";
import python from "../../image/python.png";
import spring from "../../image/spring.png";
import quarkus from "../../image/quarkus-logo.png";
import sql from "../../image/sql.png";
import mongo from "../../image/mongo.png";
import angular from "../../image/angular.png";
import react from "../../image/react.png";
import html from "../../image/html-5.png";
import css from "../../image/css-3.png";
import docker from "../../image/docker.png";
import openshift from "../../image/openshift.png";
import vscode from "../../image/vsc.png";
import jetbrains from "../../image/jetbrains.png";

const Coding = () => {
  return (
    <>
      <div className="codingSection">
        <div id="codingTitle">
          <h1> Coding Section </h1>
        </div>
        <div className="codingBody">
          <p>Skills:</p>
          <div className="skills">
            <img src={spring} alt="spring" />
            <img src={quarkus} alt="quarkus" />
            <img src={java} alt="java" />
            <img src={javascript} alt="javascript" />
            <img src={typescript} alt="typescript" />
            <img src={sql} alt="typescript" />
            <img src={mongo} alt="typescript" />
            <img src={python} alt="python" />
            <img src={angular} alt="angular" />
            <img src={react} alt="react" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={docker} alt="docker" />
            <img src={openshift} alt="openshift" />
          </div>
          <p>IDE:</p>
          <div className="ide">
            <img src={vscode} alt="vscode" />
            <img src={jetbrains} alt="jetbrains" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coding;
