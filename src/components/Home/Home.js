import React from 'react'
import Header from '../Header/Header'
import Navbar from './Navbar'
import { Icon } from '@iconify/react'
import Team from '../Team/Team'
import { OrganizationChart } from 'primereact/organizationchart';
import map from "../Map/map.json";

const Home = () => {
  const kdz = map.features.filter(map => map.properties.provinceName === "Kunduz");
  console.log(kdz);
  const data = [{
    label: 'Afghanistan',
    expanded: true,
    children: [
      {
        label: 'Kunduz',
        expanded: true,
        children: kdz.map(p => { return { label: p.properties.name } })
      }
    ]
  }];

  return (
    <div>
      <Navbar />
      <Header />
      <div className='grid mt-6'>
        <div className="surface-0 text-700 text-center col-12 md:col-4">
          <div className="text-900 font-bold text-5xl mb-3 text-blue-600">Vision</div>
          <div className="text-700 text-2xl mb-5">We are committed to creating a solid and independent society without inequalities and discrimination, where everybody enjoys equal opportunities.</div>
        </div>
        <div className="surface-0 text-700 text-center  col-12 md:col-4">
          <div className="text-900 font-bold text-5xl mb-3 text-blue-600">Mission</div>
          <div className="text-700 text-2xl mb-5">To Foster an Equitable Living Environment, Where all vulnerable people especially underprivileged, women and Children have access to Education, Health, Sustainable Livelihood opportunity, and essential infrastructure services irrespective of their economic and social status.</div>
        </div>
        <div className="surface-0 text-700 text-center  col-12 md:col-4">
          <div className="text-900 font-bold text-5xl mb-3 text-blue-600">Goal</div>
          <div className="text-700 text-2xl mb-5">Overall Socio–Economic Development of underprivileged people especially women and children.</div>
        </div>
      </div>
      <div className="surface-0 text-center mt-6">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">Our Programs, </span>
          <span className="text-blue-600">and Services</span>
        </div>
        <div className="text-700 mb-6">For the past years we have been working in.</div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='carbon:education' className='text-4xl text-blue-500' />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Education</div>
            <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='mdi:hand-wash' className='text-4xl text-blue-500' />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">WASH</div>
            <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='ri:mental-health-line' className='text-4xl text-blue-500' />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Food Nutrition & Health</div>
            <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='material-symbols:yard-outline' className='text-4xl text-blue-500' />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Sustainable Livelihood</div>
            <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='emojione-monotone:two-women-holding-hands' className='text-4xl text-blue-500' />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Women Rights</div>
            <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
          </div>
          <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <Icon icon='fa6-solid:children' className='text-4xl text-blue-500' />
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Child Rights</div>
            <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
          </div>
        </div>
      </div>
      <Team />
      <div className='surface-0 text-center mt-4 mb-4 overflow-x-auto'>
        <div className="text-900 font-bold text-5xl mb-3 text-blue-600">Where we work?</div>
        <OrganizationChart value={data}></OrganizationChart>
      </div>
    </div>
  )
}

export default Home