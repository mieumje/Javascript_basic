# String.prototype.split()
===
split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

## String.prototype.split() 사용예제
```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```
### split()의 반환값
주어진 문자열을 separator마다 끊은 부분 문자열을 담은 Array.
===

# Array.prototype.reverse()
===
reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.

## Array.prototype.reverse() 사용예제
```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

```
### reverse()의 반환값
순서가 반전된 배열.
===

# Array.prototype.join()
===
join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

## Array.prototype.join() 사용예제
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```
### join()의 반환값
배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 만약 arr.length 가 0이라면, 빈 문자열을 반환합니다.
===
# 유효한 팰린드롬 설명
+ 입력 받은 문자열을 LowerCase로 전환
++ 대소문자는 비교하지 않음
+ 소문자로 변환한 후 replcae()를 통해 특수 기호들을 모두 지워줌
+ 변환한 문자열을 공백을 제거한 후 배열로 변환(reverse()를 사용하기 위해 배열의 형태가 필요)
+ 공백이 제거된 문자열이 담긴 배열을 reverse()를 통해 역순으로 변환된 배열로 반환
+ 역순으로 반환된 문자열이 담긴 배열을 join()을 통해 문자열로 변환
+ 최종적으로 변환된 역순의 문자열과 lowerCase로 변환하고 특수문자를 제거한 문자열과 비교

## 링크
+ [String.prototype.split()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
+ [Array.prototype.reverse()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
+ [Array.prototype.join()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)