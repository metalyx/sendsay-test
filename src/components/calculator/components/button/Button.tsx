import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import {
  addSymbol, clearCalcInput, evaluate, setVisibleInput, showSymbol,
} from '../../../../store/actions/calculatorActionCreators';
import './Button.scss';

interface ButtonProps {
  title: string;
  color?: 'primary' | 'default';
}

const Button: React.FC<ButtonProps> = ({
  color = 'default', title,
}) => {
  const dispatch = useDispatch();
  const calcInput = useTypedSelector(state => state.calculator.calcInput);

  const addToExpression = (char: string) => {
    switch (char) {
      case '=':
        dispatch(evaluate(calcInput));
        dispatch(clearCalcInput());
        break;

      case 'х':
        dispatch(addSymbol('*'));
        dispatch(setVisibleInput(''));
        break;

      case '-':
        dispatch(addSymbol('-'));
        dispatch(setVisibleInput(''));
        break;

      case '/':
        dispatch(addSymbol('/'));
        dispatch(setVisibleInput(''));
        break;

      case '+':
        dispatch(addSymbol('+'));
        dispatch(setVisibleInput(''));
        break;

      case ',':
        dispatch(addSymbol('.'));

        if (calcInput === '') {
          dispatch(setVisibleInput(','));
          return;
        }

        if (showSymbol(char)) {
          dispatch(showSymbol(char));
        }
        break;

      default: {
        dispatch(addSymbol(title));

        if (calcInput === '') {
          if (showSymbol(char)) {
            dispatch(setVisibleInput(char));
          }
          return;
        }

        if (showSymbol(char)) {
          dispatch(showSymbol(char));
        }
      }
    }
  };

  return (
    <button
      className={`button ${color}`}
      type='button'
      onClick={() => addToExpression(title)}
    >
      {title}
    </button>
  );
};

export default Button;
