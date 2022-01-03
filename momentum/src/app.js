import { getUserName, paintMain } from './user.js';
import { getDate } from './clock.js';

export default function momentum() {
  paintMain(getUserName);
  getDate();
  setInterval(getDate, 1000);
}
momentum();
