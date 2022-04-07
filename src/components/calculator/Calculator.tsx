import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setDrag, unsetDrag } from '../../store/actions/dragActionCreators';
import { ObjectGroup } from '../../types/types';
import Equal from './components/equal/Equal';
import Numbers from './components/numbers/Numbers';
import Operators from './components/operators/Operators';
import VisibleInput from './components/visible-input/VisibleInput';
import './Calculator.scss';

function Calculator() {
  const dispatch = useDispatch();
  const isConstructorMode = useTypedSelector(state => state.mode.isConstructor);
  const { dropped } = useTypedSelector(state => state.dropZone);
  const [draggableObjects, setdraggableObjects] = useState<ObjectGroup[]>([]);

  const dragStart = (group: ObjectGroup) => {
    dispatch(setDrag(group));
  };

  const dragEnd = (e: React.DragEvent) => {
    e.preventDefault();
    dispatch(unsetDrag());
  };

  const getClassNameInactive = useCallback((g: ObjectGroup): string => {
    if (draggableObjects.includes(g)) {
      return 'inactive';
    }

    return '';
  }, [draggableObjects]);

  useEffect(() => {
    const clonedraggableObjects: ObjectGroup[] = [];

    dropped.forEach(d => clonedraggableObjects.push(d.group));

    setdraggableObjects(clonedraggableObjects);
  }, [dropped]);

  return (
    <div className='calculator__wrapper'>
      {isConstructorMode && (
        <>
          <div
            className={`calculator__visible-input disabled ${getClassNameInactive('input')}`}
            draggable={!draggableObjects.includes('input')}
            onDragStart={() => dragStart('input')}
            onDragEnd={(e) => dragEnd(e)}
          >
            <VisibleInput />
          </div>
          <div
            className={`calculator__operators disabled ${getClassNameInactive('operators')}`}
            draggable={!draggableObjects.includes('operators')}
            onDragStart={() => dragStart('operators')}
            onDragEnd={(e) => dragEnd(e)}
          >
            <Operators />
          </div>
          <div
            className={`calculator__numbers disabled ${getClassNameInactive('numbers')}`}
            draggable={!draggableObjects.includes('numbers')}
            onDragStart={() => dragStart('numbers')}
            onDragEnd={(e) => dragEnd(e)}
          >
            <Numbers />
          </div>
          <div
            className={`calculator__equal-button disabled ${getClassNameInactive('equalButton')}`}
            draggable={!draggableObjects.includes('equalButton')}
            onDragStart={() => dragStart('equalButton')}
            onDragEnd={(e) => dragEnd(e)}
          >
            <Equal />
          </div>
        </>
      )}
    </div>
  );
}

export default Calculator;
