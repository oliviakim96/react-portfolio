import React from 'react'
import image from "../../assets/boxes/musicbox.png";
import image2 from "../../assets/boxes/screenshot.png";
function Projectcards() {
  return (
    <div className='cards'>
        <img src={image} style={{ width: "30%" }} alt="Musicbox"/>
        <img src={image2} style={{width:"30%"}} alt="Smartstore"/>
    </div>
    
  )
}

export default Projectcards;