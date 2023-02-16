import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import { Chart } from 'primereact/chart';
import { Carousel } from 'react-responsive-carousel';

const Project = () => {
    const [recentPost, setRecentPost] = useState();
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        setRecentPost({
            id: 1,
            title: 'Awareness raising campaign and advocacy for women rights',
            details: 'With the support of EPD office for provision of small grant to Women’s Hope for Peace and Life Organization, the impact of fund was fruitful and WHPLO was able to implement an activity under the title of awareness raising campaign on peace building, women rights and child protection in Kunduz city for women and youth where total 30 women and youth participated, it was a one hour activity where the key messages about peace building, women right and child protection in emergency were passed to the participants, the usage of this fund was much important on the mentioned activity and WHPLO will continue to such activities which are important for raising the awareness of women in the remote areas and this will help them to understand about their rights and raise their voice to receive their rights at any stage and have access to the services available for the women.',
            image: 'carousel-1.jpg',
            status: 'ongoing',
            doner: 'UNICEF',
            targets: [
                {
                    name: 'Girls',
                    target: 400,
                    completed: 250
                },
                {
                    name: 'Boys',
                    target: 400,
                    completed: 390
                },
                {
                    name: 'Women',
                    target: 500,
                    completed: 100
                }
            ],
            images: ['proj1.jpeg', 'proj2.jpeg', 'proj3.jpeg'],
            targetDetails: 'With the support of EPD office for provision of small grant to Women’s Hope for Peace and Life Organization, the impact of fund was fruitful and WHPLO was able to implement an activity under the title of awareness raising campaign on peace building, women rights and child protection in Kunduz city for women and youth where total 30 women and youth participated, it was a one hour activity where the key messages about peace building, women right and child protection in emergency were passed to the participants, the usage of this fund was much important on the mentioned activity and WHPLO will continue to such activities which are important for raising the awareness of women in the remote areas and this will help them to understand about their rights and raise their voice to receive their rights at any stage and have access to the services available for the women.',
        });
        if (recentPost) {
            const labels = ['Target', 'Completed'];
            const datasets = recentPost.targets.map(t => [{ 'label': t.name, 'data': [t.target, t.completed] }]);
            const ndatasets = [];
            datasets.forEach(element => {
                ndatasets.push(element[0])
            });
            setChartData({
                labels: labels,
                datasets: ndatasets
            });
        }
        // eslint-disable-next-line
    }, []); 

    return (
        <div>
            <Navbar />
            {recentPost ? <>
                {recentPost.status === 'ongoing' &&
                    <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-center align-items-center flex-wrap">
                        <div className="font-bold mr-8">{recentPost.title}</div>
                        <span className="line-height-3">is ongoing and is running smothly.</span>
                    </div>}
                <div className="grid grid-nogutter surface-0 text-800">
                    <div className="col-12 md:col-6">
                        <section className='flex flex-column justify-content-center align-items-center text-center'>
                            <img src={`${process.env.PUBLIC_URL}/assets/logo1.png`} className="img-fluid" alt='logo' width="300" />
                            <div className="text-900 font-bold text-5xl mb-3">{recentPost.title}</div>
                            <div className="text-700 text-2xl">Funded by {recentPost.doner}</div>
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                            {
                                recentPost.images.map((img, index) =>
                                    <img key={index} src={`${process.env.PUBLIC_URL}/assets/${img}`} alt="Header" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                                )
                            }
                        </Carousel>
                    </div>
                </div>
                <div className='text-justify text-200 text-xl p-4'>{recentPost.details}</div>
                <div className="grid p-3">
                    <div className="text-700 text-center col-12">
                        <div className="font-bold text-4xl mb-3" style={{ color: 'var(--primaryColor)', fontVariant: 'small-caps' }}>Project Targets</div>
                    </div>
                    {recentPost.targets &&
                        <>
                            <div className="col-12 md:col-6">
                                <Chart type="bar" data={chartData} />
                            </div>
                            <div className="col-12 md:col-6 p-4 text-justify text-center text-200">
                                {recentPost.targetDetails}
                            </div>
                        </>
                    }
                </div>
            </> : null}
        </div>
    )
}

export default Project