# NaN
전역 NaN 속성은 Not-A-Number(숫자가 아님)를 나타낸다.

# isNaN()
isNaN() 함수는 어떤 값이 NaN인지 판별합니다. isNaN 함수는 몇몇 혼란스러운 케이스을 가지고 있으므로, ECMAScript 2015에서 추가한 Number.isNaN()으로 바꾸는 편이 좋을 수도 있습니다.

```js
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// expected output: 3140
```