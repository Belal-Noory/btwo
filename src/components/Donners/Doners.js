import React, { useEffect, useState } from 'react'
import { Carousel } from 'primereact/carousel';
const Doners = () => {
    const [doners, setDoners] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        setDoners([
            {
                id: 1,
                name: 'UNGM',
                fullname: 'UNITED NATIONS GLOBAL MARKET',
                logo: 'ungm.png'
            },
            {
                id: 2,
                name: 'UNWOMEN',
                fullname: 'UN WOMEN',
                logo: 'unwomen.png'
            },
            {
                id: 3,
                name: 'UNAMA',
                fullname: 'UNAMA',
                logo: 'UNAMA_Logo.jpg'
            },
            {
                id: 4,
                name: 'AKAH',
                fullname: 'AGHA KHAN FOUNDATION',
                logo: 'akah.png'
            },
        ])
    }, []);

    const productTemplate = (doner) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={'assets/doners/' + doner.logo} alt="logo" className='img-fluid' style={{ width: '40%' }} />
                <h4 className='text-center text-700'>{doner.fullname}</h4>
            </div>
        );
    };
    return (
        <div className='container-fluid'>
            <div className="font-bold text-3xl mb-3 text-center" style={{color:'var(--primaryColor)'}}>OUR Valued Doners/Parteners</div>
            <Carousel value={doners} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}

export default Doners