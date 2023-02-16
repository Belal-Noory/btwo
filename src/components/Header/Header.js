import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const images = ['proj1.jpeg', 'proj2.jpeg','proj3.jpeg'];
  const [clipPath, setClipPath] = useState();

  useEffect(() => {
    stickNavbar();
    window.addEventListener('resize', stickNavbar);
    return () => {
      window.removeEventListener('resize', stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowWidth = window.outerWidth;
      if (windowWidth > 766) {
        setClipPath('polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)');
      } else {
        setClipPath('');
      }
    }
  };
  return (
    <div className="grid grid-nogutter text-800" style={{minHeight:'92.1vh'}}>
      <div className="col-12 md:col-8" >
        <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
          {
            images.map((img, index) =>
                <img key={index} src={'assets/' + img} alt="Header" style={{ clipPath: clipPath, height:'92.1vh', objectFit:'cover' }} />
            )
          }
        </Carousel>
      </div>
      <div className="col-12 md:col-4 text-center flex align-items-center p-1">
        <section>
          <img alt="logo" src="assets/logo1.png" className="img-fluid" style={{width:'70%'}}></img>
          <div className="text-3xl font-bold" style={{color:'var(--primaryColor)'}}>Women’s Hope for Peace & Life Organization - WHPLO</div>
          <p className="mt-0 mb-4 text-200 line-height-3 p-2">To Improve culture of respecting Women and Children and give rights to them to contribute on social, economics and education activities and have special place among the society.</p>
          <Link to="/about" style={{textDecoration:'none'}}><Button label="Learn More" type="button" className="mr-3 text-white" style={{background:'var(--primaryColor)'}} /></Link>
          <Link to="/orgChart" style={{textDecoration:'none'}}><Button label="Org Chart" type="button" style={{borderColor:'var(--primaryColor)',background:'#fff',color:'var(--primaryColor)'}} /></Link>
        </section>
      </div>
    </div>

  )
}

export default Header