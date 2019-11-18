import { css } from 'styled-components';
import sassMix from './sass-mix';

const createNthStyles = (startColor, endColor, count) => {
  let styled = '';
  for (let i = 0; i < count; i ++) {
    styled += `
      :nth-of-type(${i + 1}) {
        background-color: ${sassMix(startColor , endColor, ((i/(count - 1)) / 100 * 10000))};
      }
    `
  }
  return css`${styled}`;
}

export default createNthStyles;