import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/ClientsSection.css";

const ClientsSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="clients" className="clients clients">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Clients</h2>
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .3"
          transitionDuration={100}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          <div className="client-item">
            <img
              src="assets/img/clients/Tata_Consulting.jpg"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div className="client-item">
            <img
              src="assets/img/clients/MMCNAVLogo3.png"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>
          <div className="client-item">
            <img
              src="assets/img/clients/DIMTSlogo.png"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
          <div className="client-item">
            <img
              src="assets/img/clients/Tata_Consulting.jpg"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
          <div className="client-item">
            <img
              src="assets/img/clients/MMCNAVLogo3.png"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
          <div className="client-item">
            <img
              src="assets/img/clients/Tata_Consulting.jpg"
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
