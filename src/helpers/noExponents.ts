/* eslint-disable no-plusplus */
export function noExponents(num: number | string) {
  const data = String(num).split(/[eE]/);
  if (data.length === 1) return data[0];

  let z = '';
  const sign = num < 0 ? '-' : '';
  const str = data[0].replace('.', '');
  let mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = `${sign}0.`;
    while (mag++) z += '0';
    // eslint-disable-next-line no-useless-escape
    return z + str.replace(/^\-/, '');
  }
  mag -= str.length;
  while (mag--) z += '0';
  return str + z;
}
