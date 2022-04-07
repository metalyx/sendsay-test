import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { addToDropZone } from '../../store/actions/dropZoneActionCreators';
import RenderSelection from '../render-selection/RenderSelection';
import './DropZone.scss';

function DropZone() {
  const [isDragOver, setDragOver] = useState(false);

  const dropped = useTypedSelector(state => state.dropZone.dropped);
  const draggableGroupName = useTypedSelector(state => state.drag.group);
  const dispatch = useDispatch();

  const dragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const dragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const drop = (e: React.DragEvent) => {
    e.preventDefault();

    if (draggableGroupName) {
      dispatch(addToDropZone(draggableGroupName));
    }
  };

  useEffect(() => {
    setDragOver(false);
  }, [dropped]);

  return (
    <>
      {dropped.length === 0 && (
        <div
          className={`dropzone__wrapper ${isDragOver ? 'ondragover' : ''}`}
          onDragOver={(e) => dragOver(e)}
          onDragLeave={(e) => dragLeave(e)}
          onDrop={(e) => drop(e)}
        >
          <span className='dropzone__span-primary'>Перетащите сюда</span>
          <span className='dropzone__span-default'>любой элемент из левой панели</span>
        </div>
      )}
      {dropped.length > 0 && (
        <div className='calculator__wrapper' style={{ margin: 0 }}>
          {dropped.map(element => (
            <RenderSelection group={element.group} key={element.group} />
          ))}
        </div>
      )}
    </>
  );
}

export default DropZone;
