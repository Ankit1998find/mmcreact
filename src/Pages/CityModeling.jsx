import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactSection from "../Components/ContactSection";

const CityModeling = () => {
  const Heading = "Multimind Creation's 3D City Modeling Services.";
  const HeroParagraph =
    "Multimind Creation offers advanced 3D city modeling services, revolutionizing urban planning and development. Utilizing cutting-edge technologies, we create highly accurate and detailed 3D models of cities, enabling stakeholders to visualize and analyze spatial data with unprecedented clarity. Our solutions empower efficient decision-making, fostering sustainable urban environments for the future.";
  const heroIMG = "/assets/img/3dcitymodeling.jpg";

  return (
    <>
      <Header />
      <Hero heroHeading={Heading} Paragraph={HeroParagraph} HeroImg={heroIMG} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default CityModeling;
