# Array.from()
===
Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.

## Array.from() 사용 예제
```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```
### 1번 예시
'foo'라는 문자열을 인자로 받고 배열로 변환
### 2번 예시
첫 번째 인자로 배열, 두 번째 인자로 각 배열에 적용할 익명 함수를 받음
배열 [1, 2, 3]을 복사하고, 각 원소에 원소를 더한 값으로 배열을 만들어 줌.

```js
console.log(Array.from({length : 5}, () => 1));

console.log(Array.from({length : 5}, ()=> Array(3).fill(0)));
```
### 1번 예시
길이가 5인 유사 배열을 만들고, 모든 원소를 1로 채워줌
### 2번 예시
길이가 5인 유사 배열을 만들고, 각 요소에 3개 만큼 0으로 채워줌
#### {length : 5}
객체 처럼 생겼지만, {length : 5}는 유사 배열이다.
자바스크립트에서 배열은 Object이기 때문이다.

배열은 legnth라는 속성을 가진 Object이고, Object에 length 속성을 넣어주면 배열로 인식된다.

length속성을 추가한 Object가 배열과 같지는 않다. 배열은 Array 메소드들을 포함하고 있는 것이고, Object에 length를 추가한 것은 Array 메소드를 포함하지 않기 때문이다.

## 요약
+ JavaScript에서 배열은 Object
+ Object에 Array메소드와 iterator, length 속성이 있는 것이 배열
+ Array.from은 유사 배열을 만들어주는 메소드
++ Array.from()의 두 번째 인자로 각 유사배열에 전달할 함수를 넘겨줌