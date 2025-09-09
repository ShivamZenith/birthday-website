import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Gallery.css";

const images = [
  { src: "/images/1.jpg", caption: "Our first date" },
  { src: "/images/2.jpg", caption: "Sweet moments" },
  { src: "/images/3.jpg", caption: "Forever us" },
  { src: "/images/4.jpg", caption: "Smiles together" },
];

function Gallery() {
  const [confetti, setConfetti] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="gallery">
      <h2>Our Happy Moments</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            onClick={() => { setConfetti(true); setPhotoIndex(index); setIsOpen(true); }}
          >
            <img src={img.src} alt={img.caption} />
            <p>{img.caption}</p>
          </motion.div>
        ))}
      </div>
      {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </section>
  );
}

export default Gallery;
