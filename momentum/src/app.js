import { getUserName, paintMain } from './user.js';
import { getDate } from './clock.js';
import { chosenImage, backgroundImage } from './background.js';

export default function momentum() {
  paintMain(getUserName);
  getDate();
  setInterval(getDate, 1000);
  document.body.appendChild(backgroundImage);
  console.log(backgroundImage.src);
}
momentum();
