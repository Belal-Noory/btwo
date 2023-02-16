import React from 'react'
import { Icon } from '@iconify/react'

const WorkArea = () => {
  return (
    <div className="text-center mt-6 p-4">
        <div className="font-bold text-3xl">
          <span style={{color:'var(--primaryColor)'}}>Our Programs, area of work</span>
        </div>
        <div className="text-200 mb-6">For the past years we have been working in.</div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='carbon:education' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Education</div>
            <span className="text-200 line-height-3">We believe education is the vaccine for violence aginst women and children.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='mdi:hand-wash' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>WASH</div>
            <span className="text-200 line-height-3">Clean hands, happy hands. Whenever in doubt, wash it out. Let's break-up with germs! Safety first!</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='ri:mental-health-line' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Food Nutrition & Health</div>
            <span className="text-200 line-height-3">Be smart, eat smart. Eat the best, leave the rest. For a healthy body for you and me, healthy eating is the key!</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='material-symbols:yard-outline' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Sustainable Livelihood</div>
            <span className="text-200 line-height-3">Sustainable living means a successful life. Take care of trees. The choice is yours- Save it or Waste it. The thing that burns never returns.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='emojione-monotone:two-women-holding-hands' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Women Rights</div>
            <span className="text-200 line-height-3">Women`s Rights are Human Rights.</span>
          </div>
          <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='fa6-solid:children' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Child Rights</div>
            <span className="text-200 line-height-3">Stop child labour and save precious children. Nurture the child for future, stop child labour. Stop child labour and protect child rights. Say yes to education, Child Labour is a violation.</span>
          </div>
        </div>
      </div>
  )
}

export default WorkArea