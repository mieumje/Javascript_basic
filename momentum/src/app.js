import { getUserName, paintMain } from './user.js';

export default function momentum() {
  paintMain(getUserName);
}
momentum();
