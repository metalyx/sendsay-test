import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsConstructor, setIsRuntime } from '../../store/actions/modeActionCreators';
import './Switch.scss';

function Switch() {
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(setIsConstructor());
    } else {
      dispatch(setIsRuntime());
    }
  };

  return (
    <>
      <span>Runtime</span>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className='switch' draggable={false}>
          <input
            type='checkbox'
            defaultChecked
            onChange={(e) => onChangeHandler(e)}
          />
          <span className='slider round' />
        </label>
      </div>
      <span>Constructor</span>
    </>
  );
}

export default Switch;
