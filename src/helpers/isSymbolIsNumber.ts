import { operatorsTitles } from '../constants/constants';

export function isSymbolIsNumber(str: string): boolean {
  if (operatorsTitles.includes(str) === false) {
    return true;
  }

  return false;
}
