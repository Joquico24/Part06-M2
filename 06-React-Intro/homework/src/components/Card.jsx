import React from 'react';

export default function Card({max, min, name, img, onClose }) {
  // acá va tu código
  return (
  <div>
    <span>{name}</span>
    <button onClick={onClose}>X</button>
    <div> 
    <temp label="Min" value={min} />
    <temp label="Max" value={max} />
      <img src={img} alt="icono" />
    </div>  
 </div>
  );
};