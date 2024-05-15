import React from 'react'

const ServicesSection = () => {
  return (
    <section id="services" className="services">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Empowering Geospatial Excellence: Our Comprehensive GIS Services</p>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4 className="title"><a href="">GIS Application Development</a></h4>
            <p className="description">We undertakes simple customization in leading GIS platforms for various purposes to development of large Enterprise-Level applications featuring design of High-Availability GIS Servers including design of large databases in leading platforms. Design and Development of Enterprise-Level</p>
            <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4 className="title"><a href="">3D City Modelling</a></h4>
            <p className="description">3D City Modeling integrates geo-referenced imagery with GIS data into a virtual environment. By providing an accurate, photo-realistic 3D model of any location, City Models are a very powerful tool for city planning, tourism, real estate, and security. It is a highly efficient and productive</p>
            <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4 className="title"><a href="">Geo - Spatial Services</a></h4>
            <p className="description">Multimind Creations is a firm of Planners, Environmentalists and Information Solutions Specialists providing consulting services to public, private, and international clients. Founded in 2008 in New Delhi, India, as a result of global experience and diversification. Over the years we have increased and diversified our</p>
            <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4 className="title"><a href="">Document Digitisation</a></h4>
            <p className="description">From past few years Multimind Creations have provided and benefited its client with different other services other than GIS, One of them is Digitisation via scanning paper based hard copy documents. Document imaging is the conversion of paper documents into electronic images on your computer. Once on your desktop, these documents can be retrieved effortlessly in seconds. Thousands of organizations around the world use document imaging every day instead of paper filing systems.</p>
            <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default ServicesSection