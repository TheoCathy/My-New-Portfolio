import React from "react";
import styles from "./Gallery.module.css";
import img1 from "../assets/Images/IMG_4926.JPG";
import img2 from "../assets/Images/IMG_6358.jpg";
import img3 from "../assets/Images/bf982aa0-069f-48e4-a2b5-4d94f0fd44be.JPG";
import img4 from "../assets/Images/IMG_0024.jpg";
import img5 from "../assets/Images/WhatsApp Image 2025-01-20 at 10.26.27.jpeg";
import img6 from "../assets/Images/WhatsApp Image 2025-01-21 at 13.48.03.jpeg";
import img7 from "../assets/Images/theodora_passport.jpeg";

function MyGallery() {
  return (
    <div className={styles.box}>
      <span style={{ "--i": 1 }}>
        <img src={img1} alt="img 1" />
      </span>
      <span style={{ "--i": 2 }}>
        <img src={img6} alt="img 2" />
      </span>
      <span style={{ "--i": 3 }}>
        <img src={img3} alt="img 3" />
      </span>
      <span style={{ "--i": 4 }}>
        <img src={img4} alt="img 4" />
      </span>
      <span style={{ "--i": 5 }}>
        <img src={img5} alt="img 5" />
      </span>
      <span style={{ "--i": 6 }}>
        <img src={img6} alt="img 6" />
      </span>
      <span style={{ "--i": 7 }}>
        <img src={img2} alt="img 7" />
      </span>
      <span style={{ "--i": 8 }}>
        <img src={img7} alt="img 8" />
      </span>
    </div>
  );
}

export default MyGallery;
