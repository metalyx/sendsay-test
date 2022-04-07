interface iCalculatorState {
  calcInput: string;
  visibleInput: string;
}

export const calculatorInitialState: iCalculatorState = {
  calcInput: '',
  visibleInput: '0',
};

/* eslint-disable no-shadow, no-unused-vars */

export enum ActionTypesCalculator {
  ADD_SYMBOL = 'ADD_SYMBOL',
  CLEAR_CALC_INPUT = 'CLEAR_CALC_INPUT',
  CLEAR_VISIBLE_INPUT = 'CLEAR_VISIBLE_INPUT',
  SET_VISIBLE_INPUT = 'SET_VISIBLE_INPUT',
  ADD_VISIBLE_INPUT = 'ADD_VISIBLE_INPUT'
}

/* eslint-enable no-shadow, no-unused-vars */

type ActionStringPayload = {
  type:
  ActionTypesCalculator.ADD_SYMBOL
  | ActionTypesCalculator.SET_VISIBLE_INPUT
  | ActionTypesCalculator.ADD_VISIBLE_INPUT,
  payload: string,
}

type ActionWithoutPayload = {
  type: ActionTypesCalculator.CLEAR_CALC_INPUT | ActionTypesCalculator.CLEAR_VISIBLE_INPUT,
}

export type ActionsCalculator = ActionStringPayload | ActionWithoutPayload;

export const calculatorReducer = (
  state: iCalculatorState = calculatorInitialState,
  action: ActionsCalculator,
): iCalculatorState => {
  switch (action.type) {
    case ActionTypesCalculator.ADD_SYMBOL:
      return {
        ...state,
        calcInput: state.calcInput.concat(action.payload),
      };
    case ActionTypesCalculator.SET_VISIBLE_INPUT:
      return {
        ...state,
        visibleInput: action.payload,
      };
    case ActionTypesCalculator.CLEAR_CALC_INPUT:
      return {
        ...state,
        calcInput: '',
      };
    case ActionTypesCalculator.CLEAR_VISIBLE_INPUT:
      return {
        ...state,
        visibleInput: '0',
      };
    case ActionTypesCalculator.ADD_VISIBLE_INPUT:
      return {
        ...state,
        visibleInput: state.visibleInput !== '0' ? state.visibleInput.concat(action.payload) : action.payload,
      };
    default:
      return state;
  }
};
