import React from 'react'
import Projectcards from './Projectcards';

function Main() {

  return (
    <div className='Container'>
<div className='About-me'>
      <h3>About me</h3>
      <span> I studied Chemistry at San Francisco State University. While I have stayed in San Francisco, I easily could meet people working in tech companies as web developers. 
        That impacted me a lot and started to have interest in coding bootcamps. After graduated the college, I moved to New Jersey and have worked in a biotech company that makes
        rapid diagnostic tests (RDT). I have worked there for a year, but can not stop thinking about the coding bootcamps. So, I searched about it and found the one, Rutgers coding bootcamp.
        I have taken the bootcamp since December, 2021. It is a full-stack curriculum for six months and I have learned html and css so far. 
    </span>
      </div>
    
      <div className='Project-Area'>
      <h3>Work</h3> 
    {<Projectcards/>}
    
  
    </div>
   </div>
  )
};

export default Main;