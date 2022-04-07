import React, { useEffect, useState } from 'react';
import { noExponents } from '../../../../helpers/noExponents';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import './VisibleInput.scss';

function VisibleInput() {
  const visibleInput = useTypedSelector(state => state.calculator.visibleInput);
  const [fixed, setFixed] = useState(visibleInput);

  useEffect(() => {
    setFixed(noExponents(visibleInput).slice(0, 13).replace('.', ','));
  }, [visibleInput]);

  return (
    <input className='visible-input' value={fixed} disabled />
  );
}

export default VisibleInput;
