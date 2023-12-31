import React from 'react'
import stopwatchIcon from './stopwatchIcon.png';

function Banner() {
  return (
    <div >
        <div className='bannerbody'>
            <h1>My Site</h1><br />
            <h5>Dinosaurs are cool</h5><br />
            <button>Docusaurus Tutorail - 5min  <img src={stopwatchIcon} alt="" /></button>


        </div>


    </div>
  )
}

export default Banner