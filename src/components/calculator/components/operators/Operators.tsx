import React from 'react';
import { operatorsTitles } from '../../../../constants/constants';
import Button from '../button/Button';
import './Operators.scss';

function Operators() {
  return (
    <div className='operators__wrapper'>
      <div className='operators'>
        {operatorsTitles.map(operator => (
          <Button title={operator} key={operator} />
        ))}
      </div>
    </div>
  );
}

export default Operators;
