import React from 'react'

const CountSection = () => {
  return (
    <section id="counts" className="counts">
    <div className="container">

      <div className="row">
        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
          <img src="assets/img/img4.jpg" alt="" className="img-fluid" />
        </div>

        <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
          <div className="content d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="321" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Happy Clients</strong> consequuntur quae</p>
                </div>
              </div>

              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                </div>
              </div>

              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="31" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                </div>
              </div>

              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Awards</strong> rerum asperiores dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default CountSection