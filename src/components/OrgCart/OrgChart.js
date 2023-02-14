import React from 'react'
import { OrganizationChart } from 'primereact/organizationchart';
import Navbar from '../Home/Navbar'
import "./OrgChart.css"

const OrgChart = () => {
    const data = [{
    label: 'General Assembly',
    expanded: true,
    children: [
      {
        label: 'Executive Assembly',
        expanded: true,
        children:[
          {label:'Operations Dept'},
          {label:'Finance Dept'},
          {label:'Procurement/Logistics Dept'},
          {label:'HR Dept'},
          {label:'M&E Dept'},
          {label:'Program Dept'},
        ]
      }
    ]
  }];
  return (
    <div className="text-700 text-center">
        <Navbar/>
        <div className='pt-6 pb-6' style={{ background: 'var(--secondaryColor)' }}>
          <div className="font-bold text-5xl mb-3 text-white">Organization Chart</div>
          <OrganizationChart value={data}></OrganizationChart>
        </div>
      </div>
  )
}

export default OrgChart