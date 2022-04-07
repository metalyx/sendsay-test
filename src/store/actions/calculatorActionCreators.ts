import { evaluateInput } from '../../helpers/evaluateInput';
import { isSymbolIsNumber } from '../../helpers/isSymbolIsNumber';
import { ActionsCalculator, ActionTypesCalculator } from '../reducers/calculatorReducer';

export function addSymbol(calcInput: string): ActionsCalculator {
  return {
    type: ActionTypesCalculator.ADD_SYMBOL,
    payload: calcInput,
  };
}

export function showSymbol(char: string): ActionsCalculator | undefined {
  if (isSymbolIsNumber(char)) {
    return {
      type: ActionTypesCalculator.ADD_VISIBLE_INPUT,
      payload: char,
    };
  }
  return undefined;
}

export function evaluate(calcInput: string): ActionsCalculator {
  return {
    type: ActionTypesCalculator.SET_VISIBLE_INPUT,
    payload: evaluateInput(calcInput),
  };
}

export function setVisibleInput(calcInput: string): ActionsCalculator {
  return {
    type: ActionTypesCalculator.SET_VISIBLE_INPUT,
    payload: calcInput,
  };
}

export function clearCalcInput(): ActionsCalculator {
  return {
    type: ActionTypesCalculator.CLEAR_CALC_INPUT,
  };
}
