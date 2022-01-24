# Array.prototype.sort()
===
sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

## Array.prototype.sort() 사용 예제
```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```
### 1번 예시
months 배열의 원소를 아스키코드 표에 따라 오름차순으로 정렬.
### 2번 예시
오름차순으로 정렬한다고 생각하면, [1,4,21,30,100000]으로 생각되지만 매개변수가 없는 경우 아스키코드 표에 따라 정렬이 된다.
## 구문
arr.sort([compareFunction])
## 매개변수
compareFunction Optional
정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.

## Array.prototype.sort() 반환값
정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.
```js
let arr = [5,1,4,3]
arr.sort();
```
## 매개변수 설명
매개변수가 없는 경우 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 
예를 들어 "바나나"는 "체리"앞에옵니다. 
숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.

매개변수로 compareFunction이 제공되면 배열 요소는 compareFunction의 반환 값에 따라 정렬됩니다. a와 b가 비교되는 두 요소라면,
compareFunction(a, b) < 0인 경우 a, b 순으로 정렬된다. 
compareFunction(a, b) = 0인 경우 a, b를 서로에 대해 변경하지 않고 모든 다른 요소에 의해 정렬된다.
compareFunction(a, b) > 0인 경우 b, a 순으로 정렬된다.

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```