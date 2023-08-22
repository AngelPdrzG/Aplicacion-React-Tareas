import React from 'react';
import FreeCodeCampLogo from '../img/freecodecamp-logo.png';
import '../hojas-de-estilo/logoFreeCodeCamp.css';

function LogoFreeCodeCamp() {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img
        src={FreeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
    </div>
  );
}

export default LogoFreeCodeCamp;