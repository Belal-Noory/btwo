import { Button } from 'primereact/button';
import React from 'react'

const Footer = () => {
    return (
        <footer class="container-fluid p-0 m-0">
            <div class="grid">
                <div class="grid col-12 p-4" style={{ background: 'var(--secondaryColor)'}}>
                    <div class="col-12 md:col-4 text-white" style={{display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <i class="pi pi-fw pi-phone mb-2" style={{fontSize:'1.6rem'}}></i>
                        <span>+93 797 160 881</span>
                    </div>
                    <div class="col-12 md:col-4 text-white" style={{display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <i class="pi pi-fw pi-inbox mb-2" style={{fontSize:'1.6rem'}}></i>
                        <span>info@whplo.org</span>
                    </div>
                    <div class="col-12 md:col-4 text-white" style={{display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <i class="pi pi-fw pi-map mb-2" style={{fontSize:'1.6rem'}}></i>
                        <span>Sare Dawra, PD4, Kunduz City, Afghanistan</span>
                    </div>
                </div>
                <div class="col-12 grid" style={{background:'var(--primaryColor)'}}>
                    <div class="col-12 md:col-4 pl-8 text-white">
                        <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt='logo' /></a>
                        <p className='mt-4'>We are committed to creating a solid and independent society without inequalities and discrimination, where everybody enjoys equal opportunities.</p>
                    </div>
                    <div class="col-12 md:col-8">
                        <div className="text-center">
                            <div className="text-900 font-bold text-5xl text-white">Donate Us</div>
                            <div className="text-700 text-2xl mb-2 text-white">You donation can save a life of afghan women and children.</div>
                            <Button label="Donate now" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap p-button-danger" />
                        </div>
                    </div>
                </div>
                <div class="col-12" style={{background:'var(--thirdColor)',display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                    <p>Copyright &copy; 2023, All Right Reserved <a href="https://whplo.org">WHPLO ORGANIZATION</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer