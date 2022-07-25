import React from "react";
import image1 from "../images/img1.jpeg";
import image2 from "../images/img2.jpeg";
import image3 from "../images/img3.jpeg";
import image4 from "../images/img4.jpeg";
import image5 from "../images/img5.jpeg";
import image6 from "../images/img6.jpeg";
import image7 from "../images/img7.jpeg";
import image8 from "../images/img8.jpeg";
import image9 from "../images/img9.jpeg";
import image10 from "../images/img10.jpeg";
import image11 from "../images/img11.jpeg";
import image12 from "../images/img12.jpeg";

function Gallery() {
  return (
    <div>
      <h1 class="heading">Project Gallery</h1>
      <div class="grid-container">
        <div class="grid-item">
          <img src={image1} alt="" />
        </div>
        <div class="grid-item">
          <img src={image2} alt="" />
        </div>
        <div class="grid-item">
          <img src={image3} alt="" />
        </div>
        <div class="grid-item">
          <img src={image4} alt="" />
        </div>
        <div class="grid-item">
          <img src={image5} alt="" />
        </div>
        <div class="grid-item">
          <img src={image6} alt="" />
        </div>
        <div class="grid-item">
          <img src={image7} alt="" />
        </div>
        <div class="grid-item">
          <img src={image8} alt="" />
        </div>
        <div class="grid-item">
          <img src={image9} alt="" />
        </div>
        <div class="grid-item">
          <img src={image10} alt="" />
        </div>
        <div class="grid-item">
          <img src={image11} alt="" />
        </div>
        <div class="grid-item">
          <img src={image12} alt="" />
        </div>
        <div class="grid-item">
          <img src={image1} alt="" />
        </div>
        <div class="grid-item">
          <img src={image2} alt="" />
        </div>
        <div class="grid-item">
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
