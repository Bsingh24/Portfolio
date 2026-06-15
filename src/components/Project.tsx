import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-list">
                <div className="project">
                    <h2><a href="https://github.com/Bsingh24/Counsel.NLP" target="_blank" rel="noreferrer">Academic Advisor - Counsel.NLP</a></h2>
                    <p>Built an end-to-end RAG system using LangGraph and LLaMA 3.2 to help students with general advising and course planning, achieving a BERTScore of 0.9.</p>
                </div>
                <div className="project">
                    <h2><a href="https://github.com/Bsingh24/FitRec" target="_blank" rel="noreferrer">Fitness Activity Recommendation</a></h2>
                    <p>Engineered a two-tower model using TensorFlow and PySpark to deliver tailored fitness activity recommendations, achieving a Recall@6 of 0.9.</p>
                </div>
                <div className="project">
                    <h2><a href="https://github.com/Bsingh24/SSJT" target="_blank" rel="noreferrer">Simulation of San Jose Traffic</a></h2>
                    <p>Simulated traffic flow around SJSU using SUMO and TraCI, implementing and comparing PPO and DQN reinforcement learning models for dynamic traffic optimization.</p>
                </div>
                <div className="project">
                    <h2><a href="https://github.com/Bsingh24/NuimDetector" target="_blank" rel="noreferrer">Nuim Detector - Object Detection</a></h2>
                    <p>Designed and deployed an object detection model utilizing Yolov8 trained on the nuImages dataset, acheiving an overall accuracy of 80%.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;