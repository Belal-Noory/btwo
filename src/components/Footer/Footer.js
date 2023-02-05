import { Button } from 'primereact/button';
import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer class="footer-section">
            <div class="container">
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="pi pi-fw pi-map"></i>
                                <div class="cta-text">
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="pi pi-fw pi-phone"></i>
                                <div class="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="pi pi-fw pi-inbox"></i>
                                <div class="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt='logo' /></a>
                                </div>
                                <div class="footer-text">
                                    <p>We are committed to creating a solid and independent society without inequalities and discrimination, where everybody enjoys equal opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-8 mb-50">
                            <div className="text-700 text-center">
                                <div className="text-900 font-bold text-5xl mb-3 text-white">Donate Us</div>
                                <div className="text-700 text-2xl mb-5">You donation can save a life of afghan women and children.</div>
                                <Button label="Donate now" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap p-button-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved <a href="https://btow.org/">BTOW</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer