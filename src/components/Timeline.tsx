import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning/Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Lyten</h4>
            <h4 className="vertical-timeline-element-subtitle">San Jose, CA</h4>
            {/* <ul style={{ listStyleType: "'+ '" }}>
              <li>Developed a real-time noise calibration pipeline utilizing a Denoising AutoEncoder to reduce sensor noise by 96%, eliminating multi-hour calibrations per-device for continuous calibration.</li>
              <li>Engineered a multi-classification pipeline with XGBoost to achieve a F1-Score of 0.95, outperforming legacy models by successfully identifying hazardous gases at low-concentrations.</li>
              <li>Developed an ETL pipeline to preprocess sensor and site data, utilizing Streamlit to monitor sensor health in real-time by visualizing sensor drift, failure patterns, and environmental impacts on sensor behavior.</li>
              <li>Conducted research and analytics for the sensors team, evaluating research papers and presenting results to leadership on integrating these approaches into production.</li>
            </ul> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - June 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist (Data Science Challenge)</h3>
            <h4 className="vertical-timeline-element-subtitle">Lawrence Livermore National Lab</h4>
            <h4 className="vertical-timeline-element-subtitle">Livermore, CA</h4>
            {/* <ul style={{ listStyleType: "'+ '" }}>
              <li>Built a compound screening pipeline for COVID-19 using Random Forest models to predict binding classification with 90% accuracy.</li>
              <li>Developed a 3-step data pipeline to clean, analyze, and extract key features from 208 compound descriptors.</li>
              <li>Presented findings and metrics to cross-functional teams, tailoring communication for both technical and non-technical audiences.</li>
            </ul> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sweep Energy</h4>
            <h4 className="vertical-timeline-element-subtitle">Merced, CA</h4>
            {/* <ul style={{ listStyleType: "'+ '" }}>
              <li>Developed and deployed a scheduling system utilizing graph algorithms to model material dependencies, resolving conflicts and reducing operational downtime by 20%.</li>
              <li>Built RESTful APIs and a responsive UI to interact with the graph algorithm, directly providing manufacturing schedules to users.</li>
            </ul> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" June 2020 - Aug 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            {/* <ul style={{ listStyleType: "'+ '" }}>
              <li>Developed an ETL pipeline to automate cleaning and standardizing complex client data, ensuring data integrity and improving reporting reliability.</li>
              <li>Utilized a Power BI dashboard to visualize the standardized data, providing interactive insights that enabled clients to identify regional trends.</li>
              <li>Provided technical documentation for bi-weekly data standardization, streamlining the process and ensuring long-term maintainability.</li>
            </ul> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;