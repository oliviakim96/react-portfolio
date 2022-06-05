import React from 'react'
import image from "../../assets/boxes/musicbox.png";

function Projectcards() {
  return (
    <div className='cards'>
        <img src={image} style={{ width: "30%" }} alt="Musicbox"/>
    </div>
  )
}

export default Projectcards;