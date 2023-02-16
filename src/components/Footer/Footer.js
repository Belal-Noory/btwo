import { Button } from 'primereact/button';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container-fluid p-0 m-0">
            <div className="grid">
                <div className="grid col-12 p-4" style={{ background: 'var(--secondaryColor)' }}>
                    <div className="col-12 md:col-4 text-white" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="pi pi-fw pi-phone mb-2" style={{ fontSize: '1.6rem' }}></i>
                        <span>+93 797 160 881</span>
                    </div>
                    <div className="col-12 md:col-4 text-white" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="pi pi-fw pi-inbox mb-2" style={{ fontSize: '1.6rem' }}></i>
                        <span>info@whplo.org</span>
                    </div>
                    <div className="col-12 md:col-4 text-white" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="pi pi-fw pi-map mb-2" style={{ fontSize: '1.6rem' }}></i>
                        <span>Sare Dawra, PD4, Kunduz City, Afghanistan</span>
                    </div>
                </div>
                <div className="col-12 grid" style={{ background: 'var(--primaryColor)' }}>
                    <div className="col-12 md:col-4 pl-8 text-white">
                        <Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/logo2.png`} className="img-fluid" alt='logo' /></Link>
                    </div>
                    <div className="col-12 md:col-8 text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="text-900 font-bold text-5xl text-white">Donate Us</div>
                        <div className="text-700 text-2xl mb-2 text-white">It's not the amount that matters but the meaning behind your donation.</div>
                        <div className="text-700 text-2xl mb-2 text-white">Emergencies come in many forms: armed conflicts, disease epidemics, natural disasters, malnutrition crises, and more. Your gift ensures that when an emergency happens, our teams are there to relieve suffering and save lives.</div>
                        <Button label="Donate now" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap text-white" style={{ background: 'tomato' }} />
                    </div>
                </div>
                <div className="col-12" style={{ background: 'var(--thirdColor)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p className='ml-2'>Copyright &copy; 2023, All Right Reserved <a href="https://whplo.org">WHPLO ORGANIZATION</a></p>
                    <div className='mr-2' style={{ marginLeft: 'auto' }}>
                        <Link to="https://www.facebook.com" target="_blank"><i className='pi pi-facebook text-2xl mr-2' style={{ color: 'var(--primaryColor)' }} /></Link>
                        <Link to="https://www.twitter.com" target="_blank"><i className='pi pi-twitter text-2xl mr-2' style={{ color: 'var(--primaryColor)' }} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer