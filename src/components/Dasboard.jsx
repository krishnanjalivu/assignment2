import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Dashboard() {
  return (
    <div>
    <Navbar />
    <div className='container'>
    <div className='mop'>
    <div className='mopside'>4</div>
    </div>
    <div className='productivity'>
        <div className='dashboard'>
         Employee Productivity Dashboard
        </div>
        <div className='pro1'>
       
         <div className='pro2'>
         <p className='para'>Productivity on Monday</p>
         <p>4%</p>
         <p className='digit'>0 </p>
         </div>
         <div className='pro2'>
         <p className='para'>Productivity on Tuesday</p>
         <p>92%</p>
         <div className='scale scale1'></div>
         </div>
         <div className='pro2'>
         <p className='para'>Productivity on Wednesday</p>
         <p>122%</p>
         <div className='scale scale2'></div>
         </div>
         <div className='pro2'>
         <p className='para'>Productivity on Thursday</p>
         <p>93%</p>
         <div className='scale scale3'></div>
         </div>
         <div className='pro2'>
         <p className='para'>Productivity on Friday</p>
         <p>89%</p>
         <div className='scale scale4'></div>
         </div>
         <div className='pro2'>
         <p className='para'>Productivity on Saturday</p>
         <p>98%</p>
         <div className='scale scale5'></div>
         </div>
        </div>

    </div>
    </div>
    </div>
  );
}

export default Dashboard;
