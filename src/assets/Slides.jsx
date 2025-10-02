import React from 'react'
import './Slides.css'   // custom css import

const Slides = () => {
  return (
    <div className="carousel-container">
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Images */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/288700/288721.jpg" 
              className="d-block w-100 carousel-img" 
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/401600/401676.jpg" 
              className="d-block w-100 carousel-img" 
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://sgttimes.com/wp-content/uploads/2025/06/GsiuE5BasAMz67J.jpeg" 
              className="d-block w-100 carousel-img" 
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slides
