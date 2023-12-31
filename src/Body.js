import React, { useEffect, useState, useRef } from "react";
import "./Body.css"; // Import the CSS file
import VideoPlayer from "./VideoPlayer";
import ProjectDetails from './ProjectDetails';

const words = [
  "Creative",
  "Detail Oriented",
  "Incredibly super",
];
const projects = [
  {
    title: 'CMG',
    description: 'Digital is a full-service digital design & production agency that empowers leading global brands to deliver their messages to the digital doorstep of the world consumers.',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2...',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3...',
  },
  {
    title: 'Project 4',
    description: 'Description for Project 4...',
  },
];




const BodyComponent = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const heroTextRef = useRef(null);

  useEffect(() => {
    if (heroTextRef.current) {
      // Calculate the width of the text inside hero-text and add 1em
      setTextWidth(heroTextRef.current.clientWidth + 40); // Adding 1em (16px) to the text width
    }

    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000); // Change word every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentWordIndex]);

  return (
    <div id="home-page" className="pt-header">
      <section className="overflow-hidden">
        <div className="container lg:pl-24 2xl:pl-48 fhd:pl-80 wide:!pl-48">
          <h1 className="flex flex-col big-headline">
            <span id="text-ref" className="pl-6 lg:pl-10 lg:pb-3">
              We make{" "}
            </span>
            <span
              id="hero-text-wrapper"
              className="relative whitespace-nowrap text-white"
              style={{ height: "1em" }}
            >
              <span
                id="green-box"
                className="bg-green"
                style={{ width: textWidth }} // Set the width dynamically
              ></span>
              <span
                className="absolute left-6 lg:left-10 hero-text word"
                ref={heroTextRef}
              >
                {words[currentWordIndex]}
              </span>
            </span>
            <span className="pl-6 lg:pl-10 lg:pb-3">digital products.</span>
          </h1>
        </div>
      </section>
      
              <VideoPlayer/>
    
      <section className="aboutus">
        <div className="container-1">
          <div className="space">
            <h2 className="font">about us</h2>
            <p className="p1">
              At TechFlux, we're a dedicated team focused on digital development
              and building creative solutions. Our passion lies in working
              closely with our partners and customers to develop valuable
              digital products tailored to their needs.
            </p>
            <a href="/team" className="about-button">
              <span className="items">
                Find out more <span className="icon"></span>
              </span>
            </a>
          </div>
        </div>
        </section>
        <section className="section">
  <div className="headline">
    <h1>OUR WORK</h1>
  </div>
  <ProjectDetails projects={projects} />
</section>


<section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Process & Approach</h2>
        <ul className="process-list">
          <li className="process-item">
            <span className="process-step">1.</span>
            <span className="process-heading">Discover</span>
            <p className="process-description">Get to know your business, goals, and audience.
             Conduct research and analysis for insights.</p>
          </li>
          <li className="process-item">
            <span className="process-step">2.</span>
            <span className="process-heading">Design</span>
            <p className="process-description">Translate ideas into visual concepts. Create wireframes, style guides, and interactive prototypes.</p>
          </li>
          <li className="process-item">
            <span className="process-step">3.</span>
            <span className="process-heading">Develop</span>
            <p className="process-description">Bring designs to life using latest technologies. Create a responsive, fast, and functional website.</p>
          </li>
          <li className="process-item">
            <span className="process-step">4.</span>
            <span className="process-heading">Improve</span>
            <p className="process-description">Collect user feedback, track performance, and make data-driven improvements over time.</p>
          </li>
        </ul>
      </div>
      <div className="process-info">
        <p>For over a decade, we've been delivering epic user experiences that will amaze you.</p>
        <small>Since 2011</small>
      </div>
    </section>

    </div>
  );
};

export default BodyComponent;
