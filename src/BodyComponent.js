import React, { useEffect, useState, useRef } from "react";
import { words } from "./Body";

export const BodyComponent = () => {
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
        <div data-fade-container="" data-start="100%" data-delay="1" className="container">
          <div data-fade-item="" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: 'translate(0px, 0px)' }}>
            <div data-cursor="play" className="relative overflow-hidden rounded-3xl">
              <div className="lg:transition-transform lg:duration-500 cursor-pointer lg:hover:scale-110">
                <div className="aspect-w-16 aspect-h-9">

                  <img
                    src="https://n2new-admin.north2.work/uploads/i_Phone_11_Pro_Mockup_bd23992bf3.jpg"
                    width="1920"
                    height="1080"
                    alt="iPhone 11 Pro Mockup.jpg"
                    className="lg:transition-opacity lg:duration-500 hidden lg:block opacity-100" />
                </div>
                <h2 className="absolute top-1/2 left-1/2 lg:top-0 lg:left-0 transform -translate-x-1/2 -translate-y-1/2 text-white big-headline opacity-0 hidden lg:block">
                  Showreel
                </h2>
              </div>
              <a href="https://player.vimeo.com/video/459248842?h=d4b957d5e6&amp;controls=0" aria-label="Open showreel video" className="glightbox absolute top-0 left-0 w-full h-full lg:hidden lg:invisible lg:pointer-events-none"></a>
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
      <section className="section space-y-6 xl:space-y-24 2xl:space-y-28" data-body-color="#F2F2F2">
        <div className="container flex items-center justify-between mt-2 xl:mt-0">
          <h2 className="big-headline !leading-none lg:ml-logoDesktop">
            <div style={{ position: 'relative', display: 'inline-block' }} className="single-word">
              <div className="single-word-inner">Our</div>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }} className="single-word">
              <div className="single-word-inner">work</div>
            </div>
          </h2>
          <div data-fade-container="" data-delay="0.5">
            <a href="/projects" className="font-medium rounded-full px-6 py-3 inline-flex items-center whitespace-nowrap shadow-lg bg-primary">
              <span className="flex items-center relative z-10">See all projects <span className="icon-right-long text-xl ml-5"></span></span>
            </a>
          </div>
        </div>
        {/* Swiper Container */}
        <div className="_with-padding swiper-container swiper-container-initialized swiper-container-horizontal">
          <div className="swiper-wrapper">
            {/* Swiper Slides */}
            {/* You can map your project data here and create individual slides */}
            <div className="swiper-slide swiper-slide-active">
              {/* Project Card */}
              {/* Adjust the content dynamically based on your project data */}
              <div data-cursor="view" className="group bg-gray-dark overflow-hidden xl:cursor-pointer aspect-w-3 aspect-h-5 md:aspect-h-4 rounded-2xl xl:aspect-w-16 xl:aspect-h-9">
                {/* Project Image */}
                <figure className="h-full xl:h-[120%]">
                  <img src="https://n2new-admin.north2.work/uploads/test_2_efe2ea3f48.jpg" width="1943" height="1295" alt="CMG Digital project" loading="lazy" className="object-cover object-center w-full h-full" />
                </figure>
                {/* Overlay */}
                <div className="bg-black/20 xl:bg-black/50 xl:transition xl:duration-500 xl:opacity-0 xl:group-hover:opacity-100"></div>
                {/* Project Info */}
                <section className="flex flex-col items-start text-white p-6 xl:p-8">
                  {/* Project Title */}
                  <h3 className="project-title leading-tight xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:text-center xl:leading-[1.1] xl:font-medium xl:flex xl:flex-col xl:items-center">
                    CMG.
                  </h3>
                  {/* Project Description */}
                  <p className="text-base leading-tight w-2/3 xl:hidden mt-2">
                    CMG - Digital design &amp; smart production agency
                  </p>
                  {/* Button */}
                  <div className="flex items-center justify-end w-full mt-auto">
                    <button className="font-medium rounded-full px-6 py-3 inline-flex items-center whitespace-nowrap shadow-lg text-black bg-primary">
                      <span className="flex items-center relative z-10">See project <span className="icon-right-long ml-5"></span></span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
            {/* Additional slides can be added similarly */}
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </section>
    </div>
  );
};
