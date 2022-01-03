import { clock } from './htmlDom.js';

export const getDate = () => {
  const date = new Date();
  const Hours = (`0${date.getHours()}`).slice(-2);
  const Minutes = (`0${date.getMinutes()}`).slice(-2);
  const Seconds = (`0${date.getSeconds()}`).slice(-2);

  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
};
