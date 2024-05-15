import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactSection from "../Components/ContactSection";

const ApplicationDev = () => {
  const Heading =
    "Multimind Creation's Expertise in GIS Application Development";
  const HeroParagraph =
    "At Multimind Creation, we specialize in developing cutting-edge GIS applications that unlock the power of spatial data. Our team of skilled developers combines technical expertise with a deep understanding of geographic information systems to create tailored solutions that drive efficiency and innovation";
  const heroIMG = "/assets/img/applicationdevelopment.jpg";

  return (
    <>
      <Header />
      <Hero heroHeading={Heading} Paragraph={HeroParagraph} HeroImg={heroIMG} />
      <ContactSection />

      <Footer />
    </>
  );
};

export default ApplicationDev;
