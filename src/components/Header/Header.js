import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

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
      let windowWidth = window.outerWidth;
      if (windowWidth > 766) {
        setClipPath('polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%');
      } else {
        setClipPath('');
      }
    }
  };
  return (
    <div className="grid grid-nogutter text-800">
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
      <div className="col-12 md:col-4 text-center flex align-items-center p-1">
        <section>
          <div className="text-3xl font-bold" style={{color:'var(--primaryColor)'}}>Women’s Hope for Peace & Life Organization - WHPLO</div>
          <p className="mt-0 mb-4 text-700 line-height-3">Women’s Hope for peace and Life Organization (WHPLO) is nongovernmental, non-profit and independent organization established in 07-May-2020 (18-02-1399) based in Kunduz province and officially registered with Ministry of Economy of Islamic Republic of Afghanistan bearing registration number 4953. WHPLO is a not-for-profit organization working for education, health, and women’s empowerment in underprivileged communities, especially with children and women.</p>
          <Link to="/about" style={{textDecoration:'none'}}><Button label="Learn More" type="button" className="mr-3" style={{background:'var(--primaryColor)'}} /></Link>
          <Link to="/orgChart" style={{textDecoration:'none'}}><Button label="Org Chart" type="button" style={{borderColor:'var(--primaryColor)',background:'#fff',color:'var(--primaryColor)'}} /></Link>
        </section>
      </div>
    </div>

  )
}

export default Header