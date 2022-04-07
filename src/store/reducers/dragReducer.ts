import { ObjectGroup } from '../../types/types';

interface iDragState {
  group: ObjectGroup | null;
}

const dragState: iDragState = {
  group: null,
};

/* eslint-disable no-shadow, no-unused-vars */
export enum DragActionTypes {
  SET_DRAG_OBJECT = 'SET_DRAG_OBJECT',
  UNSET_DRAG_OBJECT = 'UNSET_DRAG_OBJECT'
}
/* eslint-enable no-shadow, no-unused-vars */

type ActionGroupPayload = {
  type: DragActionTypes.SET_DRAG_OBJECT,
  payload: ObjectGroup,
}

type ActionWithoutPayload = {
  type: DragActionTypes.UNSET_DRAG_OBJECT
}

export type DragActions = ActionGroupPayload | ActionWithoutPayload;

export function dragReducer(state: iDragState = dragState, action: DragActions) {
  switch (action.type) {
    case DragActionTypes.SET_DRAG_OBJECT:
      return {
        ...state,
        group: action.payload,
      };
    case DragActionTypes.UNSET_DRAG_OBJECT:
      return {
        ...state,
        group: null,
      };
    default:
      return state;
  }
}
