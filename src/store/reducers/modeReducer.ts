interface iModeState {
  isRuntime: boolean;
  isConstructor: boolean;
}

const modeInitialState: iModeState = {
  isConstructor: true,
  isRuntime: false,
};

/* eslint-disable no-shadow, no-unused-vars */
export enum ModeActionTypes {
  SET_IS_CONSTRUCTOR = 'SET_IS_CONSTRUCTOR',
  SET_IS_RUNTIME = 'SET_IS_RUNTIME',
}
/* eslint-enable no-shadow, no-unused-vars */

type ModeActionWithoutPayload = {
  type: ModeActionTypes.SET_IS_CONSTRUCTOR | ModeActionTypes.SET_IS_RUNTIME,
}

export type ModeActions = ModeActionWithoutPayload;

export function modeReducer(state: iModeState = modeInitialState, action: ModeActions): iModeState {
  switch (action.type) {
    case ModeActionTypes.SET_IS_CONSTRUCTOR:
      return {
        ...state,
        isConstructor: true,
        isRuntime: false,
      };
    case ModeActionTypes.SET_IS_RUNTIME:
      return {
        ...state,
        isConstructor: false,
        isRuntime: true,
      };
    default:
      return state;
  }
}
