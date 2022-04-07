import { ModeActions, ModeActionTypes } from '../reducers/modeReducer';

export function setIsConstructor(): ModeActions {
  return {
    type: ModeActionTypes.SET_IS_CONSTRUCTOR,
  };
}

export function setIsRuntime(): ModeActions {
  return {
    type: ModeActionTypes.SET_IS_RUNTIME,
  };
}
