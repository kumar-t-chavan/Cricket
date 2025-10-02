import React from 'react'

const Link = () => {
 const sub = ()=>{
  alert("Subcription 1$")
 }
  return (
    <div className='main'>
   <div className="card" style={{ width: "18rem" }}>
        <img src="https://manifest-media.in/cover/prev/q47p50ge6o015r8agnro2nf1a2-20250214075954.Medi.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JioHotstar</h5>
          <p className="card-text">
            Jio platforms (like JioCinema, JioTV) provide OTT streaming content such as movies, web series, TV shows, and sports.
          </p>
          <a href="#" className="btn btn-primary" onClick={sub}>Watch Vedio</a>
        </div>
      </div>




      <div className="card" style={{ width: "18rem" }}>
        <img src="https://variety.com/wp-content/uploads/2020/05/disney-hotstar-logo-res.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Disney+ Hotstart</h5>
          <p className="card-text">
           Disney+ Hotstar is an OTT streaming platform that provides movies, TV shows, web series, sports, and Disney content.
          </p>
          <a href="#" className="btn btn-primary" onClick={sub}>Watch Vedio</a>
        </div>
      </div>



      <div className="card" style={{ width: "18rem" }}>
        <img src="https://exchange4media.gumlet.io/news-photo/141778-sportspii.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Start Sports</h5>
          <p className="card-text">
            Star Sports is a sports broadcasting network that aims to deliver live sports coverage to viewers in India and other countries.
          </p>
          <a href="#" className="btn btn-primary" onClick={sub}>Watch Vedio</a>
        </div>
      </div>


      <div className="card" style={{ width: "18rem" }}>
        <img src="https://technosports11.b-cdn.net/wp-content/uploads/2024/02/23196-fancode-1024x614.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">FanCode</h5>
          <p className="card-text">
            FanCode is a digital sports platform that aims to deliver live sports streaming, highlights, and stats to fans, especially in India.
          </p>
          <a href="#" className="btn btn-primary"onClick={sub} >Watch Vedio</a>
        </div>
      </div>
    </div>
  )
}

export default Link
