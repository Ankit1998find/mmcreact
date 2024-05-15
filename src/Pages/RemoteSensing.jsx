import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactSection from "../Components/ContactSection";

const RemoteSensing = () => {
  const Heading = "Remote Sensing Solutions by Multimind Creation";
  const HeroParagraph =
    "Multimind Creation pioneers remote sensing solutions that redefine how we understand and interact with our world. Leveraging state-of-the-art technology, we unlock invaluable insights from satellite and aerial data, empowering industries such as agriculture, environmental monitoring, and urban planning. Our innovative approach enables precise, data-driven decision-making, driving progress and sustainability across diverse landscapes";
  const heroIMG = "/assets/img/remotesensing.jpg";

  return (
    <>
      <Header />
      <Hero heroHeading={Heading} Paragraph={HeroParagraph} HeroImg={heroIMG} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default RemoteSensing;
