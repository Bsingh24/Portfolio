import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>About Me</h1>
                <div className="about-me">
                    <p>
                        Hi I'm Baljot, a recent Master's graduate in Artificial Intelligence from San Jose State University, 
                        with a background in Computer Science from UC Merced. I'm a builder at heart: whether it's a machine 
                        learning pipeline, a full-stack web app, or a GenAI-powered solution, I care deeply about shipping 
                        things that actually work. That means thorough testing, validation, and making sure whatever I hand 
                        off is something I'd stand behind.
                    </p>
                    <p>
                        My experience spans machine learning, data science, and data analytics. From designing complex 
                        solutions and pipelines, to building RAG systems and recommendation engines as personal projects. 
                        I'm comfortable across different stacks such as LangChain, PyTorch, Flask, Docker, and more. 
                        I'm always looking to grow my toolkit and take on problems that push me to think differently.
                    </p>                    
                </div>
            </div>
        </div>
    );
}

export default Expertise;