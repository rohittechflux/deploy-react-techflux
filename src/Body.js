import React, { useEffect, useState, useRef } from "react";
import "./Body.css"; // Import the CSS file
import ProjectDetails from './ProjectDetails';

const words = [
  "Creative",
  "Detail Oriented",
  "Incredibly Awesome Super",
];
const projects = [
  {
    title: 'CMG',
    description:
      'CMG Digital is a full-service digital design & production agency that empowers leading global brands to deliver their messages to the digital doorstep of the world\'s consumers. CMG Digital specializes in creating innovative digital solutions, including web design, mobile apps, and interactive media.',
  },
  
  // Add more projects here following the same structure
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
      <section className="section">
        <div
          data-fade-container=""
          data-start="100%"
          data-delay="1"
          className="container"
        >
          <div
            data-fade-item=""
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              visibility: "inherit",
              transform: "translate(0px, 0px)",
            }}
          >
            <div
              data-cursor="play"
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="lg:transition-transform lg:duration-500 cursor-pointer lg:hover:scale-110">
                <div className="image">
                <img src="https://n2new-admin.north2.work/uploads/i_Phone_11_Pro_Mockup_bd23992bf3.jpg"/>
               
                </div>
                <h2 className="absolute top-1/2 left-1/2 lg:top-0 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 text-white big-headline opacity-0 hidden lg:block">
                  Showreel
                </h2>
              </div>
              <a
                href="https://player.vimeo.com/video/459248842?h=d4b957d5e6&amp;controls=0"
                aria-label="Open showreel video"
                className="glightbox absolute top-0 left-0 w-full h-full lg:hidden lg:invisible lg:pointer-events-none"
              ></a>
            </div>
          </div>
        </div>
      </section>
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

      {projects.map((project, index) => (
        <div className="project-image" key={index}>
          <img
            src="https://n2new-admin.north2.work/uploads/test_2_efe2ea3f48.jpg"
            alt={`Project ${index}`}
          />
          <ProjectDetails title={project.title} description={project.description} />
        </div>
      ))}
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
