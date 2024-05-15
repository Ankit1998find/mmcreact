import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import data from "../Data/AboutData.json";
import "../Components/css/style.css";

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 10px;
`;

const About = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <>
      <Header />

      {jsonData && (
        <Hero
          heroHeading={jsonData.HeroHeading}
          Paragraph={jsonData.HeroParagraph}
          HeroImg={jsonData.HeroImg}
        />
      )}

      <div className="container">
        {jsonData &&
          jsonData.AboutContent &&
          jsonData.AboutContent.length > 0 && (
            <div>
              <>
                <h2 className="text-center mt-5 mb-3">About US</h2>
                <StyledParagraph
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: jsonData.AboutContent[0].About,
                  }}
                />

                <h2 className="mt-3 mb-3 text-center">Our Vision</h2>
                <StyledParagraph
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: jsonData.AboutContent[0]["Our Vision"],
                  }}
                />

                <h3 className="mt-4 mb-3 text-center">
                  Why Choose Multimind Creations?
                </h3>
                {jsonData.AboutContent[0][
                  "Why Choose Multimind Creations?"
                ].map((item, index) => (
                  <div key={index}>
                    {Object.entries(item).map(([key, value]) => (
                      <div key={key}>
                        <StyledParagraph className="text-justify">
                          <b>{key}:</b>{" "}
                          <span dangerouslySetInnerHTML={{ __html: value }} />
                        </StyledParagraph>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            </div>
          )}

        {jsonData &&
          jsonData.OurServices &&
          jsonData.OurServices.length > 0 && (
            <>
              <h3 className="text-center mt-5 mb-3">Our Services</h3>
              {Object.entries(jsonData.OurServices[0]).map(
                ([key, value], index) => (
                  <div key={index}>
                    <StyledParagraph className="text-justify">
                      <b>{key}:</b>{" "}
                      <span dangerouslySetInnerHTML={{ __html: value }} />
                    </StyledParagraph>
                  </div>
                )
              )}
            </>
          )}
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default About;
