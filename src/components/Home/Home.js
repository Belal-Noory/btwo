import React from 'react'
import Header from '../Header/Header'
import Navbar from './Navbar'
import Team from '../Team/Team'
// import { OrganizationChart } from 'primereact/organizationchart';
// import map from "../Map/map.json";
import WorkArea from '../WorkArea';
// import Vision from "../Vision";
import RecentActivity from '../RecentActivity';
const Home = () => {
  // const kdz = map.features.filter(map => map.properties.provinceName === "Kunduz");
  // const data = [{
  //   label: 'Afghanistan',
  //   expanded: true,
  //   children: [
  //     {
  //       label: 'Kunduz',
  //       expanded: true,
  //       children: kdz.map(p => { return { label: p.properties.name } })
  //     }
  //   ]
  // }];

  return (
    <div className='m-0'>
      <Navbar />
      <Header />
      <RecentActivity/>
      <WorkArea/>
      <Team />
    </div>
  )
}

export default Home