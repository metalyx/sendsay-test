import { combineReducers } from 'redux';
import { calculatorReducer } from './calculatorReducer';
import { dragReducer } from './dragReducer';
import { dropZoneReducer } from './dropZoneReducer';
import { modeReducer } from './modeReducer';

export const rootReducer = combineReducers({
  dropZone: dropZoneReducer,
  calculator: calculatorReducer,
  mode: modeReducer,
  drag: dragReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
