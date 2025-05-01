import React from 'react';

const headshot = "https://media.licdn.com/dms/image/v2/D4E03AQH6V93OKdrD9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668525420223?e=2147483647&v=beta&t=uYxzFKiA28SkF7JcPaFSCig2GW5HFMeFDrIe1PFgyCQ"

const Hero = () => {
  return (
    <main id='trail-container'>
      <section id="hero-banner">
        <img id='hero-img' src={headshot} alt="Valentino Ramiro's Headshot" />

        <h1 id="hero-greeting">
          Hey there, Nice to see you! 👋🏼
        </h1>

        <h1 id="hero-intro">
          I'm Valentino Ramiro, Audio & Software Engineer
        </h1>
        
        <h2 id="hero-about">
          I enjoy making things sound & work properly! 🎧⚙️
        </h2>

      </section>
    </main>
  );
};

export default Hero;