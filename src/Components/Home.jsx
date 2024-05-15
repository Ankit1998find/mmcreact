import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import ServicesSection from './ServicesSection';
import MoreServicesSection from './MoreServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './css/style.css';

const Home = () => {
  return (
    <>
     <Header />
     <Hero/>
     <Main />
     <ServicesSection />
     <MoreServicesSection />
     <ContactSection />
     <Footer />
    </>
  );
};

export default Home;
