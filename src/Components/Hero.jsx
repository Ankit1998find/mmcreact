import React from "react";
import { useLocation } from "react-router-dom";

const Hero = ({ heroHeading, Paragraph, HeroImg }) => {
  let location = useLocation();
  let currentPage = location.pathname;
  let heading = ""; // Default heading
  let HeroParagraph = "";
  let image = "";

  switch (currentPage) {
    case "/About":
      heading = heroHeading;
      HeroParagraph = Paragraph;
      image = HeroImg;
      break;
    case "/gis-application-dev":
      heading = heroHeading;
      HeroParagraph = Paragraph;
      image = HeroImg;
      break;

    case "/remote-sensing":
      heading = heroHeading;
      HeroParagraph = Paragraph;
      image = HeroImg;
      break;

    case "/3d-city-modeling":
      heading = heroHeading;
      HeroParagraph = Paragraph;
      image = HeroImg;
      break;

    case "/gis-photogrammetry":
      heading = heroHeading;
      HeroParagraph = Paragraph;
      image = HeroImg;
      break;

    case "/gis-data-analysis":
      heading = heroHeading;
      HeroParagraph = Paragraph;
      image = HeroImg;
      break;

    default:
      heading = "Pioneering Geospatial Solutions for a Sustainable Future";
      HeroParagraph =
        "Multimind Creations is a leading GIS company, dedicated to delivering innovative solutions for complex spatial challenges. With a focus on sustainability and impactful decision-making, we drive meaningful change through cutting-edge geospatial technologies";
      image = "assets/img/img3.jpg";
      break;
  }

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">{heading}</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              {HeroParagraph}
            </h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <a href="#about" className="btn-get-started scrollto">
                Know More
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img src={image} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
