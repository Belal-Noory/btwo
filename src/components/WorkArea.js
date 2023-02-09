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
            <span className="text-200 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='mdi:hand-wash' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>WASH</div>
            <span className="text-200 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='ri:mental-health-line' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Food Nutrition & Health</div>
            <span className="text-200 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='material-symbols:yard-outline' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Sustainable Livelihood</div>
            <span className="text-200 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='emojione-monotone:two-women-holding-hands' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Women Rights</div>
            <span className="text-200 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
          </div>
          <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='fa6-solid:children' className='text-4xl' style={{color:'var(--secondaryColor)'}} />
            </span>
            <div className="text-xl mb-3 font-medium" style={{color:'var(--primaryColor)'}}>Child Rights</div>
            <span className="text-200 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
          </div>
        </div>
      </div>
  )
}

export default WorkArea