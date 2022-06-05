import React from 'react'

function Navbar() {
  const Navlist =["About me","Portfolio","Resume"];
  return (
  <div className='Navbar'>
     <h2>{Navlist}</h2>
  </div>
  );
}

export default Navbar