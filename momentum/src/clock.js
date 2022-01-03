import { clock } from './htmlDom.js';

export const getDate = () => {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
