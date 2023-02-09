
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [stickyBackground, setStickyBackground] = useState('rgba(53, 172, 224, .9)');
    const [stickyClass, setStickyClass] = useState('relative');
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
                            label: 'P1',
                        }
                    ]
                },
                {
                    label: 'Completed',
                    icon: 'pi pi-fw pi-check-circle',
                    items: [
                        {
                            label: 'P1',
                        },
                    ]
                }
            ]
        },
        {
            label: 'Blog',
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
                setStickyClass('fixed');
            } else {
                setStickyBackground('rgba(53, 172, 224, .9)');
                setStickyClass('relative');
            }
        }
    };

    const start = <Link to="/" style={{display:'flex', justifyContent:'center', alignItems:'center',color:'gray',textDecoration:'none', marginRight:'4px'}}>
                    <h5 style={{color: '#fff'}}>WHPLO</h5>
                </Link>;
    const end = <Button label="Donate" className="p-button-sm" style={{background:'tomato'}} />

    return (<Menubar model={items} start={start} end={end} className={'navbar '+stickyClass} style={{ borderRadius: '0', background: stickyBackground, border:'none' }} />);
}