import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setDrag, unsetDrag } from '../../store/actions/dragActionCreators';
import { removeFromDropZone, setDropped } from '../../store/actions/dropZoneActionCreators';
import { ObjectGroup } from '../../types/types';
import Equal from '../calculator/components/equal/Equal';
import Numbers from '../calculator/components/numbers/Numbers';
import Operators from '../calculator/components/operators/Operators';
import VisibleInput from '../calculator/components/visible-input/VisibleInput';
import './RenderSelection.scss';

interface RenderSelectionProps {
  group: ObjectGroup;
}

const RenderSelection: React.FC<RenderSelectionProps> = ({ group }) => {
  const [objectBoxShadowed, setObjectBoxShadowed] = useState<ObjectGroup | ''>('');
  const dispatch = useDispatch();
  const dropped = useTypedSelector(state => state.dropZone.dropped);
  const dragged = useTypedSelector(state => state.drag);
  const isConstructor = useTypedSelector(state => state.mode.isConstructor);

  const [classNames, setClassNames] = useState('');

  const dragStart = (e: React.DragEvent, g: ObjectGroup) => {
    if (isConstructor === false) {
      e.preventDefault();
    }
    dispatch(setDrag(g));
  };

  const dragOver = (e: React.DragEvent, g: ObjectGroup) => {
    e.preventDefault();
    setObjectBoxShadowed(g);
  };

  const dragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setObjectBoxShadowed('');
  };

  const dragEnd = (e: React.DragEvent) => {
    e.preventDefault();
    setObjectBoxShadowed('');
    dispatch(unsetDrag());
  };

  const doubleClick = (g: ObjectGroup) => {
    if (isConstructor) {
      dispatch(removeFromDropZone(g));
    }
  };

  const drop = (e: React.DragEvent, currentGroup: ObjectGroup) => {
    e.preventDefault();
    setObjectBoxShadowed('');

    /* dragged - здесь это элемент который был схвачен пользователем
       проверка на то, есть ли этот объектв стейте(вдруг схвачен не элемент калькулятора) */
    if (dragged?.group) {
      /* Клонируем массив всех элементов в конструкторе */
      const droppedClone = [...dropped];

      /* hoverObject - объект на который делается дроп
         draggedObject - объект, который отпустили */
      const hoverObject = droppedClone.filter(el => el.group === currentGroup)[0];
      const draggedObject = droppedClone.filter(el => el.group === dragged.group)[0];

      /* Если оба объекта - это одно и то же, ничего не делаем */
      if (hoverObject === draggedObject) {
        return;
      }

      /* Получаем индекс взятого элемента в массиве всех дропнутых в конструктор элементов */
      const draggedIndex = droppedClone.indexOf(draggedObject);

      /* Если он существует - удаляем его со старого места */
      if (draggedIndex >= 0) {
        droppedClone.splice(draggedIndex, 1);
      }

      /* Получаем индекс объекта, на который происходит дроп */
      const hoverObjectIndex = droppedClone.indexOf(hoverObject);

      /* Вставляем элемент после того, на который происходит дроп */
      droppedClone.splice(hoverObjectIndex + 1, 0, { group: dragged.group });

      /* Необходимо обновить стейт полученным массивом */
      dispatch(setDropped(droppedClone));
    }
  };

  useEffect(() => {
    const className = [];

    if (isConstructor === false) {
      className.push('not-draggable');
      className.push('pointer-events');
    }

    if (objectBoxShadowed === group) {
      className.push('shadowed');
    }

    setClassNames(className.join(' '));
  }, [isConstructor, objectBoxShadowed]);

  return (
    <>
      {group === 'input' && (
        <div
          className={`calculator__visible-input in-constructor ${classNames}`}
          draggable={isConstructor}
          onDragOver={(e) => dragOver(e, group)}
          onDragLeave={(e) => dragLeave(e)}
          onDragEnd={(e) => dragEnd(e)}
          onDrop={(e) => drop(e, group)}
          onDoubleClick={() => doubleClick(group)}
          onDragStart={(e) => dragStart(e, group)}
        >
          <VisibleInput />
        </div>
      )}

      {group === 'operators' && (
        <div
          className={`calculator__operators in-constructor ${classNames}`}
          draggable={isConstructor}
          onDragOver={(e) => dragOver(e, group)}
          onDragLeave={(e) => dragLeave(e)}
          onDragEnd={(e) => dragEnd(e)}
          onDrop={(e) => drop(e, group)}
          onDoubleClick={() => doubleClick(group)}
          onDragStart={(e) => dragStart(e, group)}
        >
          <Operators />
        </div>
      )}

      {group === 'numbers' && (
        <div
          className={`calculator__numbers in-constructor ${classNames}`}
          draggable={isConstructor}
          onDragOver={(e) => dragOver(e, group)}
          onDragLeave={(e) => dragLeave(e)}
          onDragEnd={(e) => dragEnd(e)}
          onDrop={(e) => drop(e, group)}
          onDoubleClick={() => doubleClick(group)}
          onDragStart={(e) => dragStart(e, group)}
        >
          <Numbers />
        </div>
      )}

      {group === 'equalButton' && (
        <div
          className={`calculator__equal-button in-constructor ${classNames}`}
          draggable={isConstructor}
          onDragOver={(e) => dragOver(e, group)}
          onDragLeave={(e) => dragLeave(e)}
          onDragEnd={(e) => dragEnd(e)}
          onDrop={(e) => drop(e, group)}
          onDoubleClick={() => doubleClick(group)}
          onDragStart={(e) => dragStart(e, group)}
        >
          <Equal />
        </div>
      )}
    </>
  );
};

export default RenderSelection;
