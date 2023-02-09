import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import "./Team.css"
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div id='model3' className='text-center grid p-4'>
        <div className="font-bold text-3xl col-12" style={{color:'var(--primaryColor)'}}>Our Expert Team</div>
        <p className='text-center col-12'>If you are eager to see full details of our profesional member, please click on the eye icon. when your mouse enters the member section, you will see the eye icon.</p>
        <div className="members col-12 grid">
          <div className="member col-12 md:col-4">
            <img width={200} height={200} src='assets/founder.png' alt='img' />
            <div className="description">
                <h1>Norzya Ahmadzai</h1>
                <h2>Founder of BTWO</h2>
                <p>Results-focused professional with strength in women development and child rights. Proactive leader with strength in communication and collaboration.</p>
                <div className="social-media">
                  <Link to="/team/F" style={{color:'white'}}><Visibility /></Link>
                </div>
            </div>
          </div>
          <div className="member col-12 md:col-4">
            <img width={200} height={200} src='assets/mawab.jpeg' alt='img' />
            <div className="description">
                <h1>Nawab Rahimi</h1>
                <h2>General Director</h2>
                <p>My goal is to empower women in society. Proactive leader with strength in communication and collaboration.</p>
                <div className="social-media">
                  <Link to="/team/Nawab-Rahimi" style={{color:'white'}}><Visibility /></Link>
                </div>
            </div>
          </div>
          <div className="member col-12 md:col-4">
            <img width={200} height={200} src='assets/belalnoory.jpg' alt='img' />
            <div className="description">
                <h1>Belal Noory</h1>
                <h2>Program Manager</h2>
                <p>I have proved to be an independent worker with a reputation as a resourceful problem-solver who uses his initiative and organizational skills to get the job done.</p>
                <div className="social-media">
                  <Link to="/team/Belal-Noory" style={{color:'white'}}><Visibility /></Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Team