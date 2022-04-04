import React from 'react'
import './dash.css'
function Gallery() {
    return (
        <div>
               {/* ---------------------------------Gal */}
        <div className="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="https://www.w3schools.com/css/img_forest.jpg" alt="Forest" width="600" height="400"/>
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="https://www.w3schools.com/css/img_lights.jpg" alt="Northern Lights" width="600" height="400"/>
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="https://www.w3schools.com/css/img_mountains.jpg" alt="Mountains" width="300" height="200"/>
  </a>
  <div className="desc">Add a description of the image here</div>
</div>
<br/>

        </div>
    )
}

export default Gallery
