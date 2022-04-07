/* eslint-disable no-eval */
export function evaluateInput(expression: string) {
  /*
    Eval безопасен здесь, так как пользователь не может внедрить
    свой код сюда, а взаимодействует лишь с кнопками калькулятора
  */
  try {
    const evaluation = eval(expression);

    if (typeof evaluation !== 'number') {
      return 'Не определено';
    }

    if (Number.isFinite(evaluation)) {
      return evaluation.toString();
    }

    return 'Не определено';
  } catch {
    return 'Не определено';
  }
}
