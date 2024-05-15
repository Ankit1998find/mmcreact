import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="about">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <p>
            Multimind Creations is a firm of Planners, Environmentalists and Information Solutions Specialists providing consulting services to public, private, and international clients.Founded in 2008 in New Delhi, India, as a result of global experience and diversification.Our consulting capabilities are further strengthened by our continued commitment to research and through partnerships with academic institutions and civil society organizations.
          </p>
         
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <p>
            Over the years we have increased and diversified our expertise in design, planning and information solutions, closely integrating these technology areas into our vocabulary of project delivery. As a -multi-faceted team, we work on planning projects, address and integrate environmental considerations, and apply information technologies like Geographic Information Systems (GIS) to address multi-sectoral projects.
          </p>
          <a href="#" className="btn-learn-more">Learn More</a>
        </div>
      </div>

    </div>
  </section>
  )
}

export default AboutSection