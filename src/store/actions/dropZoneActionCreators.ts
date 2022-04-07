import { ObjectGroup } from '../../types/types';
import { ActionsDropZone, ActionTypesDropZone, iDropped } from '../reducers/dropZoneReducer';

export function addToDropZone(group: ObjectGroup): ActionsDropZone {
  return {
    type: ActionTypesDropZone.ADD_TO_DROP_ZONE,
    payload: {
      group,
    },
  };
}

export function removeFromDropZone(group: ObjectGroup): ActionsDropZone {
  return {
    type: ActionTypesDropZone.REMOVE_FROM_DROP_ZONE,
    payload: group,
  };
}

export function setDropped(dropped: iDropped[]): ActionsDropZone {
  return {
    type: ActionTypesDropZone.SET_DROPPED,
    payload: dropped,
  };
}
