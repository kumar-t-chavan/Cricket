import React from 'react'

const Team = () => {
  return (
    <div>
      {/* First Carousel */}
      <div className="carousel-container">
        <div id="carouselOne" className="carousel slide carousel-fade">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselOne" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselOne" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Second Carousel */}
      <div className="carousel-container mt-5">
        <div id="carouselTwo" className="carousel slide carousel-fade">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://th-i.thgim.com/public/sport/cricket/q6cywe/article53061457.ece/alternates/FREE_1200/MUMBAIINDIANSjpg" 
                className="d-block w-100 carousel-img" 
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://c.ndtvimg.com/2024-05/96albtqo_mumbai-indians-bcci_625x300_12_May_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738?im=FitAndFill=(800,400)" 
                className="d-block w-100 carousel-img" 
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://media.gettyimages.com/id/2215671376/photo/mumbai-indians-players-celebrate-their-teams-win-at-the-end-of-the-indian-premier-league.jpg?s=612x612&w=0&k=20&c=YzIGmfvCiOd_fMXbIv2L7UWzsSH-F1uRYJJts_Bi6cg=" 
                className="d-block w-100 carousel-img" 
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselTwo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselTwo" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        
      </div>


 <div className="carousel-container mt-5">
        <div id="carouselThree" className="carousel slide carousel-fade">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselThree" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselThree" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselThree" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://www.punjabkingsipl.in/static-assets/waf-images/7b/79/44/16-9/Og9VWe0Nbe.png" 
                className="d-block w-100 carousel-img" 
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://www.punjabkingsipl.in/static-assets/waf-images/d0/ca/28/16-9/BSoPTm6IWa.JPG" 
                className="d-block w-100 carousel-img" 
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://i.ytimg.com/vi/xAd9EpXoMk0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBj2VY02DRZh8gqC1uhlxMgC5Gw6Q" 
                className="d-block w-100 carousel-img" 
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselThree" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselThree" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>





       <div className="carousel-container mt-5">
        <div id="carouseFour" className="carousel slide carousel-fade">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouseFour" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouseFour" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouseFour" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://i.ytimg.com/vi/RqatiSWnoUM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIp6puPBSVgOq9debdsu6lKmfhIA" 
                className="d-block w-100 carousel-img" 
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2023-12-30_at_06.19.54.webp?v=1703898765" 
                className="d-block w-100 carousel-img" 
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://assets.ganeshaspeaks.com/wp-content/uploads/2024/04/Team-Sunrises-Hyderabad.webp" 
                className="d-block w-100 carousel-img" 
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouseFour" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouseFour" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>




 <div className="carousel-container mt-5">
        <div id="carouseFive" className="carousel slide carousel-fade">
          {/* Indicators */}

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouseFive" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouseFive" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouseFive" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://uccricket.live/wp-content/uploads/2024/11/Chennai-Super-Kings-Full-Squad.webp" 
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.moneycontrol.com/static-mcnews/2024/03/@ChennaiIPL-1-770x435.jpg?impolicy=website&width=770&height=431" 
                className="d-block w-100 carousel-img" 
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/ms-dhoni-063401996-16x9_1.jpg?VersionId=BiDv7AXLimRlZUMjJZr2OrgqVepS4Ps3&size=690:388" 
                className="d-block w-100 carousel-img" 
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouseFive" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouseFive" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Team
