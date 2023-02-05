
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

export default function Navbar() {
    const [stickyBackground, setStickyBackground] = useState('rgba(255, 255, 255, 0.675)');
    const [stickyClass, setStickyClass] = useState('relative');
    const items = [
        {
            label: 'About',
            icon: 'pi pi-fw pi-info',
            items: [
                {
                    label: 'BTWO Profile',
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
        },
        {
            icon: 'pi pi-fw pi-twitter text-primary',
        },
        {
            icon: 'pi pi-fw pi-facebook text-primary',
        },
        {
            icon: 'pi pi-fw pi-whatsapp text-success',
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
                setStickyBackground('');
                setStickyClass('fixed');
            } else {
                setStickyBackground('rgba(255, 255, 255, 0.675)');
                setStickyClass('relative');
            }
        }
    };

    const start = <img alt="logo" src="https://primereact.org/images/logo.png" height="40" className="mr-2"></img>;
    const end = <div>
            <Button type="button" label="Donate" className="p-button-danger p-button-sm" />
        </div>

    return (<Menubar model={items} start={start} end={end} className={'navbar '+stickyClass} style={{ borderRadius: '0', background: stickyBackground, border:'none' }} />);
}