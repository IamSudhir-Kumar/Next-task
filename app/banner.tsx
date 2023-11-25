"use client";
// Import dependencies
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import image1 from './assets/aa.png';
import image2 from './assets/bb.png';
import image3 from './assets/cc.png';

// Define the images array
const images = [image1, image2, image3];

// Dynamic import of Slider component
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Banner component
const Banner: React.FC = () => {
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Effect to update the current image index at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Add an empty dependency array to run the effect only once

  // Settings for the Slider component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      {/* Render Slider component on the client side */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <p className="text-lg">Description or additional information</p>
      </div>
    </div>
  );
};

export default Banner;
