
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
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
                    command: ()=>{
                        navigate("/about");
                    }
                },
                {
                    label: 'Our Vision, Mission, and Goal ',
                    icon: 'pi pi-fw pi-shield',
                    command: ()=>{
                        navigate("/vision");
                    }
                },
                {
                    label: 'Organization Chart',
                    icon: 'pi pi-fw pi-chart-pie',
                    command: ()=>{
                        navigate("/orgChart");
                    }
                },
                {
                    label: 'Where we work?',
                    icon: 'pi pi-fw pi-question',
                    command: ()=>{
                        navigate("/workArea");
                    }
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
                            label: 'IDPs HHs Assessment in Imam Sahib District',
                        },
                        {
                            label: 'Awareness raising campaigns for COVID-19',
                        },
                    ]
                }
            ]
        },
        {
            label: 'Privacy/Policy',
            icon: 'pi pi-fw pi-shield',
            items: [
                {
                    label: 'Human Resource (HR) Policy',
                    icon: 'pi pi-fw pi-user',
                },
                {
                    label: 'Financial Policy',
                    icon: 'pi pi-fw pi-dollar'
                },
                {
                    label: 'Procurement/logistics Policy',
                    icon: 'pi pi-fw pi-chart-pie'
                },
                {
                    label: 'Gender Policy',
                    icon: 'pi pi-fw pi-verified'
                }
            ]
        },
        {
            label: 'Blog',
            icon: 'pi pi-fw pi-users',
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