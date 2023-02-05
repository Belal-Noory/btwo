import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'primereact/button';

const Header = () => {
  const images = ['carousel-1.jpg', 'carousel-2.jpg'];
  const [clipPath, setClipPath] = useState('polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%');

  useEffect(() => {
    window.addEventListener('resize', stickNavbar);
    return () => {
      window.removeEventListener('resize', stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowWidth = window.innerWidth;
      if (windowWidth > 766) {
        setClipPath('polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%');
      } else {
        setClipPath('');
      }
    }
  };
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-8">
        <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
          {
            images.map((img, index) =>
              <div key={index}>
                <img src={'assets/' + img} alt="Header" style={{ clipPath: clipPath }} />
              </div>
            )
          }
        </Carousel>
      </div>
      <div className="col-12 md:col-4 p-2 text-center flex align-items-center ">
        <section>
          <div className="text-6xl text-primary font-bold">Better Tommorow for Women Organization</div>
          <p className="mt-0 mb-4 text-700 line-height-3">BTWO Trust (BTWOT) is a not-for-profit organization working for education, health, and women’s empowerment in underprivileged communities, especially with children and women.</p>
          <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
          <Button label="Org Chart" type="button" className="p-button-outlined" />
        </section>
      </div>
    </div>

  )
}

export default Header