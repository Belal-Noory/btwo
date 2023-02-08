
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [stickyBackground, setStickyBackground] = useState('rgba(255, 255, 255, 0.675)');
    const [stickyClass, setStickyClass] = useState('relative');
    const [logoColor, setLogoColor] = useState('--primaryColor');
    const items = [
        {
            label: 'About',
            icon: 'pi pi-fw pi-info',
            items: [
                {
                    label: 'WHPLO Profile',
                    icon: 'pi pi-fw pi-user',
                },
                {
                    label: 'Our Vision, Mission, and Goal ',
                    icon: 'pi pi-fw pi-shield'
                },
                {
                    label: 'Organization Chart',
                    icon: 'pi pi-fw pi-chart-pie'
                },
                {
                    label: 'Where we work?',
                    icon: 'pi pi-fw pi-question'
                }
            ]
        },
        {
            label: 'Projects',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                {
                    label: 'Ongoing',
                    icon: 'pi pi-fw pi-chart-line',
                    items: [
                        {
                            label: 'Education',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'WASH',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'Food Nutrition & Health',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'Sustainable Livelihood',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'Other (Women, Child Rights & disaster)',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Completed',
                    icon: 'pi pi-fw pi-check-circle',
                    items: [
                        {
                            label: 'Education',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'WASH',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'Food Nutrition & Health',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'Sustainable Livelihood',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            label: 'Other (Women, Child Rights & disaster)',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact Us',
            icon: 'pi pi-fw pi-inbox',
        }
    ];

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);


    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            if (windowHeight > 5) {
                setStickyBackground('var(--primaryColor)');
                setLogoColor('#fff');
                setStickyClass('fixed');
            } else {
                setStickyBackground('rgba(247, 229, 197, .2)');
                setStickyClass('relative');
                setLogoColor('var(--primaryColor)')
            }
        }
    };

    const start = <Link to="/" style={{display:'flex', justifyContent:'center', alignItems:'center',color:'gray',textDecoration:'none', marginRight:'4px'}}>
                    <img alt="logo" src="https://primereact.org/images/logo.png" height="40" className="mr-2"></img>
                    <h5 style={{color: logoColor}}>WHPLO</h5>
                </Link>;
    const end = <Button label="Donate" className="p-button-danger p-button-sm" />

    return (<Menubar model={items} start={start} end={end} className={'navbar '+stickyClass} style={{ borderRadius: '0', background: stickyBackground, border:'none' }} />);
}