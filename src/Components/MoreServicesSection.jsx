import React from 'react';

const MoreServicesSection = () => {
  return (
    <section id="more-services" className="more-services">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card" style={{ backgroundImage: 'url("assets/img/img1.jpg")' }} data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h5 className="card-title"><a href="">GIS Application Development</a></h5>
                <p className="card-text">We undertake simple customizations in leading GIS platforms for various purposes and develop large Enterprise-Level applications featuring the design of High-Availability GIS Servers, including the design of large databases in leading platforms.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="card" style={{ backgroundImage: 'url("assets/img/img2.jpg")' }} data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title"><a href="">3D City Modelling</a></h5>
                <p className="card-text">3D City Modeling integrates geo-referenced imagery with GIS data into a virtual environment. By providing an accurate, photo-realistic 3D model of any location, City Models are a very powerful tool for city planning, tourism, real estate, and security.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card" style={{ backgroundImage: 'url("assets/img/img3.jpg")' }} data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h5 className="card-title"><a href="">Geo – Spatial Services</a></h5>
                <p className="card-text">Over the years, we have increased and diversified our expertise in design, planning, and information solutions, closely integrating these technology areas into our vocabulary of project delivery. As a multi-faceted team, we work on planning projects, address and integrate environmental considerations, and apply information technologies like Geographic Information Systems (GIS) to address multi-sectoral projects.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card" style={{ backgroundImage: 'url("assets/img/img4.jpg")' }} data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title"><a href="">Document Digitisation</a></h5>
                <p className="card-text">From the past few years, Multimind Creations has provided and benefited its clients with different other services other than GIS. One of them is Digitisation via scanning paper-based hard copy documents. Document imaging is the conversion of paper documents into electronic images on your computer. Once on your desktop, these documents can be retrieved effortlessly in seconds. Thousands of organizations around the world use document imaging every day instead of paper filing systems.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServicesSection;
