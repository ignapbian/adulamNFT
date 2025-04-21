// src/components/AboutUs.jsx
import React from 'react';
import background from '../assets/bg.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-20 px-8 object-fill" style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">About NFTBlockBrothers</h1>
        <p className="text-lg mb-4">
          NFTBlockBrothers is a next-generation Web3 platform focused on the sale of collectible NFTs that embody themes of financial freedom, empowerment, and social impact.
        </p>
        <p className="text-lg mb-4">
          Each NFT is a unique, high-quality piece of digital art created with AI, offering collectors not just ownership, but identity and purpose.
        </p>
        <p className="text-lg mb-4">
          Our mission is to redefine the NFT landscape with limited-edition artworks, strategic partnerships, and a vision to become a global reference in NFTs that represent more than art — a lifestyle of freedom, ownership, and empowerment.
        </p>
        <p className="text-lg">
          Join us as we continue to innovate and expand, offering exclusive benefits and opportunities for our community.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;