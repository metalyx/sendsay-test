import { ObjectGroup } from '../../types/types';

export interface iDropped {
  group: ObjectGroup;
}

interface iDropZoneState {
  dropped: iDropped[],
}

const dropZoneInitialState: iDropZoneState = {
  dropped: [],
};

/* eslint-disable no-shadow, no-unused-vars */

export enum ActionTypesDropZone {
  ADD_TO_DROP_ZONE = 'ADD_TO_DROP_ZONE',
  REMOVE_FROM_DROP_ZONE = 'REMOVE_FROM_DROP_ZONE',
  CLEAR_DROP_ZONE = 'CLEAR_DROP_ZONE',
  SET_DROPPED = 'SET_DROPPED'
}

/* eslint-enable no-shadow, no-unused-vars */

type ActionDroppedPayload = {
  type: ActionTypesDropZone.ADD_TO_DROP_ZONE,
  payload: iDropped,
}

type ActionDroppedArrayPayload = {
  type: ActionTypesDropZone.SET_DROPPED,
  payload: iDropped[],
}

type ActionStringPayload = {
  type: ActionTypesDropZone.REMOVE_FROM_DROP_ZONE,
  payload: ObjectGroup,
}

type ActionWithoutPayload = {
  type: ActionTypesDropZone.CLEAR_DROP_ZONE
}

export type ActionsDropZone =
ActionWithoutPayload |
ActionStringPayload |
ActionDroppedPayload |
ActionDroppedArrayPayload;

export const dropZoneReducer = (
  state: iDropZoneState = dropZoneInitialState,
  action: ActionsDropZone,
): iDropZoneState => {
  switch (action.type) {
    case ActionTypesDropZone.ADD_TO_DROP_ZONE:
      return {
        ...state,
        dropped: [...state.dropped, action.payload],
      };
    case ActionTypesDropZone.REMOVE_FROM_DROP_ZONE:
      return {
        ...state,
        dropped: state.dropped.filter(dropped => dropped.group !== action.payload),
      };
    case ActionTypesDropZone.CLEAR_DROP_ZONE:
      return {
        ...state,
        dropped: [],
      };
    case ActionTypesDropZone.SET_DROPPED:
      return {
        ...state,
        dropped: action.payload,
      };
    default:
      return state;
  }
};
