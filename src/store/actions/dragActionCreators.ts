import { ObjectGroup } from '../../types/types';
import { DragActions, DragActionTypes } from '../reducers/dragReducer';

export function setDrag(group: ObjectGroup): DragActions {
  return {
    type: DragActionTypes.SET_DRAG_OBJECT,
    payload: group,
  };
}

export function unsetDrag(): DragActions {
  return {
    type: DragActionTypes.UNSET_DRAG_OBJECT,
  };
}
