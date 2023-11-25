import React from 'react';
import './card.css';
import a from './assets/a.png';

// const images:any = [
//     {
//       id: 1,
//       src: a,
//       alt: "Image 1",
//     }]

const Marquee: React.FC = () => {
  return (
    <div id="brand-card" className="animate-marquee flex space-x-5 overflow-hidden">
      <div id="card" className="w-80 h-40 bg-[#091f2c] rounded-l-full rounded-r-lg">
        <a className='text-white py-10 px-5'>buy now</a>
        </div>
      <div id="card" className="w-80 h-40 bg-black rounded-l-full rounded-r-md"></div>
      <div id="card" className="w-80 h-40 bg-pink-800 rounded-l-full rounded-r-lg"></div>
      <div id="card" className="w-80 h-40 bg-[#091f2c] rounded-l-full rounded-r-lg"></div>
      <div id="card" className="w-80 h-40 bg-black rounded-l-full rounded-r-md"></div>
      <div id="card" className="w-80 h-40 bg-pink-800 rounded-l-full rounded-r-lg"></div>
    </div>
  );
};

export default Marquee;
