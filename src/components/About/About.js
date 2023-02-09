import React from 'react'
import Navbar from '../Home/Navbar'
import Vision from '../Vision'
import WorkArea from '../WorkArea'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='grid'>
        <div className="col-12 md:col-8 text-700 text-justify p-3">
          <div className="font-bold text-3xl text-center" style={{ color: 'var(--primaryColor)' }}>Summary</div>
          <div className="text-200 p-4">Women’s Hope for peace and Life Organization (WHPLO) is nongovernmental, non-profit and independent organization established in 07-May-2020 (18-02-1399) based in Kunduz province and officially registered with Ministry of Economy of Islamic Republic of Afghanistan bearing registration number 4953.
            WHPLO is working to improve the knowledge of Afghan women to advocate for peace and human/women’s rights, looking for funding opportunities for conducting public awareness raising campaigns and workshops for Afghan women’s and support them to be self-sufficient and be independently in the society (contribute in social, economics, educations, peace building, human rights, humanitarian, protection and women/children rights related activities).
            WHPLO has enough capacity to implement humanitarian aids projects, education in emergency projects, child protection, agriculture, food security & livelihood projects, disaster risk reduction projects and capacity building projects as well as stability related projects, there are professional staff for project development and proposals writing and meet the donor requirement, we have standard financial system, administration, gender, and human resources policies which fitfully meets the international donors requirements.
            Taking into consideration the challenging environment and numerous obstacles in the women development and life changes, in Afghanistan, WHPLO Board of Directors took this initiative to establish the organization which aims to increase the awareness of Afghan Women who they are currently suffering from several challenges and has very limited access to resources and services
            WHPLO is providing equal opportunities for both male and female for the employment and participate in the social, economics, humanitarian, education and development activities and will work hard for women to have full contribution in all the activities done for the society and convince the community members to allow them to have access for their rights.
          </div>
          <Vision />
        </div>
        <div className="col-12 md:col-4 text-700 text-justify p-3">
          <div className="font-bold text-3xl text-center" style={{ color: 'var(--primaryColor)' }}>Objectives</div>
          <div className='p-4'>
            <div className="text-200 text-justify">
              <i className='pi pi-check text-success' /> Women and children empowered to actively contribute in sustainable development, peace and social change.
            </div>
            <div className="text-200 text-justify">
              <i className='pi pi-check text-success' /> Strengthening volunteer culture among youth to achieve sustainable social changes.
            </div>
            <div className="text-200 text-justify">
              <i className='pi pi-check text-success' /> Delivered decision right, education and social service for women and children in purpose supporting and promotion.
            </div>
            <div className="text-200 text-justify">
              <i className='pi pi-check text-success' /> Supporting Equal Opportunities for Women in Occupation and Management at Leadership Levels.
            </div>
          </div>
          <div className="font-bold text-3xl text-center mt-4" style={{ color: 'var(--primaryColor)' }}>Core Values</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Integrity and Honesty.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Commitment, transparency, accountability.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Gender Equality.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Team Work.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Respect to human dignity.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Respect to cultural norms of the societies.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> No discrimination.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Professionalism.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Ethical & Gender Sensitive.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Social Justice.</div>
          <div className="text-200 text-left pl-4"><i className='pi pi-check text-success' /> Respect to all segment of society without discrimination, prejudice to cast, religion, language and race.</div>
        </div>
      </div>
      <WorkArea />
    </div>
  )
}

export default About