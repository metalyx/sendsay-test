import React from 'react';
import Button from '../button/Button';
import './Numbers.scss';

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

function Numbers() {
  return (
    <div className='numbers__wrapper'>
      {numbers.map(number => (
        <Button title={number} key={number} />
      ))}
    </div>
  );
}

export default Numbers;
