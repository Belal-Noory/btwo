import React from 'react'
import Navbar from '../Home/Navbar'
import Vision from '../Vision'
import WorkArea from '../WorkArea'
import { Timeline } from 'primereact/timeline';
import "./TimelineDemo.css";
import { Image } from 'primereact/image';

const About = () => {
  const events = [
    {
      status: 'Aim & Objectives', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'carousel-1.jpg', values: [
        'Women and children empowered to actively contribute in sustainable development, peace and social change.',
        'Strengthening volunteer culture among youth to achieve sustainable social changes.',
        'Delivered decision right, education and social service for women and children in purpose supporting and promotion.',
        'Supporting Equal Opportunities for Women in Occupation and Management at Leadership Levels.'
      ], clip:'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
    },
    {
      status: 'Core Values & Principals', icon: 'pi pi-cog', color: '#673AB7', image: 'carousel-1.jpg', values: [
        'Integrity and Honesty.',
        'Commitment, transparency, accountability.',
        'Gender Equality.',
        'Team Work.',
        'Respect to human dignity.',
        'Respect to cultural norms of the societies.',
        'No discrimination.',
        'Professionalism.',
        'Ethical & Gender Sensitive.',
        'Social Justice.',
        'Gender sensitiveness',
        'Transparency and Accountability ',
        'Respect to all segment of society without discrimination, prejudice to cast, religion, language and race.'
      ], clip:'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'
    },
    {
      status: 'Guidance Principals', icon: 'pi pi-cog', color: '#673AB7', image: 'carousel-1.jpg', values: [
        'Utilization of local wisdom and resources.',
        'Encouragement of innovation and creativity.',
        'Prioritizing quality.',
        'Enhancing coordination and networking.',
        'Accepting challenges.'
      ], clip:'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
    },
    {
      status: 'Organization Believes', icon: 'pi pi-shopping-cart', color: '#FF9800', image: 'carousel-1.jpg', values: [
        'In the potential power of the poor and rural people to participate actively in development initiatives within their community.',
        'In equal opportunity for man and women in society irrespective of class, age, ethnic, culture or religion.',
        'Human Rights for all',
        'In freedom of expression, movement and choice by man and women alike.',
        'In social harmony free from communal bias.',
        'Freedom for work, education and development.'
      ], clip:'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'
    },
  ];

  const IOI = ['Development of women.', 'Children deprived of education.', 'Discrimination and exploitation of vulnerable groups like the tribal and the homeless.', 'Child rights.', 'Education.', 'Emergencies', 'Social Research'];

  const customizedContent = (item) => {
    return (
      <div className='mt-3 pl-4 pt-2 pb-2 pr-2' style={{ borderLeft: '15px solid var(--secondaryColor)', background: '#b5eef2' }}>
        <div className="font-bold text-4xl mb-3 text-left" style={{ color: 'var(--primaryColor)' }}>{item.status}</div>
        {item.values.map((value, index) =>
          <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}><i className="pi pi-check text-black"></i><p className='text-200 text-left font-bold m-2' key={index}>{value}</p></div>
          )}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="text-700 text-center pr-6 pl-6 pb-6 pt-2">
        <img src="assets/logo2.png" className="img-fluid" alt='logo' width="500" />
        <div className="font-bold text-4xl mb-3" style={{ color: 'var(--primaryColor)' }}>We are committed to creating a solid and independent society without inequalities and discrimination, where everybody enjoys equal opportunities.</div>
        <div className="text-700 text-justify">
          <div className="text-200">Women’s Hope for peace and Life Organization (WHPLO) is nongovernmental, non-profit and independent organization established in 07-May-2020 (18-02-1399) based in Kunduz province and officially registered with Ministry of Economy of Islamic Republic of Afghanistan bearing registration number 4953.
            WHPLO is working to improve the knowledge of Afghan women to advocate for peace and human/women’s rights, looking for funding opportunities for conducting public awareness raising campaigns and workshops for Afghan women’s and support them to be self-sufficient and be independently in the society (contribute in social, economics, educations, peace building, human rights, humanitarian, protection and women/children rights related activities).
            WHPLO has enough capacity to implement humanitarian aids projects, education in emergency projects, child protection, agriculture, food security & livelihood projects, disaster risk reduction projects and capacity building projects as well as stability related projects, there are professional staff for project development and proposals writing and meet the donor requirement, we have standard financial system, administration, gender, and human resources policies which fitfully meets the international donors requirements.
            Taking into consideration the challenging environment and numerous obstacles in the women development and life changes, in Afghanistan, WHPLO Board of Directors took this initiative to establish the organization which aims to increase the awareness of Afghan Women who they are currently suffering from several challenges and has very limited access to resources and services
            WHPLO is providing equal opportunities for both male and female for the employment and participate in the social, economics, humanitarian, education and development activities and will work hard for women to have full contribution in all the activities done for the society and convince the community members to allow them to have access for their rights.
          </div>
        </div>
        <Vision />
        <Timeline value={events} align="alternate" className="customized-timeline mt-4" content={customizedContent} />
        <div className='mt-3 pl-4 pt-2 pb-2 pr-2' style={{ borderLeft: '15px solid var(--secondaryColor)', background: '#b5eef2' }}>
          <div className="font-bold text-4xl mb-3 mt-4" style={{ color: 'var(--primaryColor)' }}>Issue of interests</div>
          <div className="text-200 text-justify">
            Promoting the aims and purpose of the organizations among the various societies of the different district in Kunduz province, Organization is actively working for the social development of poor communities for their better future in Education, Water Sanitation & Hygiene, Food Nutrition & Health and Economic development through sustainable livelihood and protect their Human Rights.
          </div>
          {IOI.map((item, index) => <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}><i className="pi pi-check text-black"></i><p className='text-200 text-left font-bold m-2' key={index}>{item}</p></div>)}
          <div className="font-bold text-2xl text-left" style={{ color: 'var(--primaryColor)' }}>Our focus areas for rural development</div>
          <div className="text-200 text-justify pb-4">Our Rural development activities, key areas are Education, WASH, Food Nutrition & Health, Sustainable Livelihood, and Social causes.</div>
          <div className="font-bold text-2xl text-left" style={{ color: 'var(--primaryColor)' }}>Management and planning </div>
          <div className="text-200 text-justify pb-4">WHPLO Trust process at internal reform to strengthen its planning, monitoring and evaluation function and its human resources, finance and administrative management has begun to yield results. Progress was made in standardizing a predictable year planning process, as well as in starting to build the capacity of members and providing guidance on results, based planning and monitoring, as well as the generation of lessons learned and best practices, will require further improvement.</div>
          <div className="font-bold text-2xl text-left" style={{ color: 'var(--primaryColor)' }}>Decision Making</div>
          <div className="text-200 text-justify pb-4">WHPLO Trust believes that the decision making is a key part of an (administration) Administrative bodies activities, it permeates though all managerial function such as planning, organization, direction and control. Decision making involves thinking and deciding before doing and its part of our function. In keep the view of our organization’s objectives, policies, program and strategies are our organization decision making process.</div>
        </div>
      </div>
      <WorkArea />
    </div>
  )
}

export default About