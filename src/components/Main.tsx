import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Avatar from '../assets/images/Avatar-modified.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/bsingh24" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/baljot-singh-0622/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Baljot Singh</h1>
          <p>ML Engineer/Data Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/bsingh24" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/baljot-singh-0622/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;