import React from 'react'
import Header from '../Header/Header'
import Navbar from './Navbar'
import Team from '../Team/Team'
import { OrganizationChart } from 'primereact/organizationchart';
import map from "../Map/map.json";
import WorkArea from '../WorkArea';
import Vision from "../Vision";
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
    <div className='m-0'>
      <Navbar />
      <Header />
      <Vision/>
      <WorkArea/>
      <Team />
      <div className='text-center mt-4 overflow-x-auto p-4'>
        <div className="font-bold text-3xl mb-3" style={{color:'var(--primaryColor)'}}>Where we work?</div>
        <OrganizationChart value={data}></OrganizationChart>
      </div>
    </div>
  )
}

export default Home