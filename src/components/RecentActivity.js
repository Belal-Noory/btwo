import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'

const RecentActivity = () => {
    const [clipPath, setClipPath] = useState();
    const [recentPost, setRecentPost] = useState();

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowWidth = window.outerWidth;
            if (windowWidth > 766) {
                setClipPath('polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)');
            } else {
                setClipPath('');
            }
        }
    };

    useEffect(() => {
        stickNavbar();
        window.addEventListener('resize', stickNavbar);
        // get recent post
        setRecentPost({
            id: 1,
            title: 'Awareness raising campaign and advocacy for women rights',
            details: 'With the support of EPD office for provision of small grant to Women’s Hope for Peace and Life Organization, the impact of fund was fruitful and WHPLO was able to implement an activity under the title of awareness raising campaign on peace building, women rights and child protection in Kunduz city for women and youth where total 30 women and youth participated, it was a one hour activity where the key messages about peace building, women right and child protection in emergency were passed to the participants, the usage of this fund was much important on the mentioned activity and WHPLO will continue to such activities which are important for raising the awareness of women in the remote areas and this will help them to understand about their rights and raise their voice to receive their rights at any stage and have access to the services available for the women.',
            image: 'carousel-1.jpg'
        })
        return () => {
            window.removeEventListener('resize', stickNavbar);
        };
    }, []);

    return (
        recentPost && <div className="grid grid-nogutter text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <div className="text-4xl text-primary text-center font-bold mb-3">{recentPost.title}</div>
                    <p className="mt-0 mb-4 text-300 line-height-3">{recentPost.details}</p>
                    <Link to={`project/${recentPost.id}`} style={{ textDecoration: 'none' }}><Button label="Learn More" type="button" className="mr-3 p-button-raised text-white" /></Link>
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src={"assets/"+recentPost.image} alt="hero-1" className="md:ml-auto block md:h-full img-fluid" style={{ clipPath: clipPath, objectFit: 'cover' }} />
            </div>
        </div>
    )
}

export default RecentActivity