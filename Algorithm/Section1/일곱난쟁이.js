// 일곱 난쟁이의 키의 합이 100
// 따라서 전체 9명의 난쟁이의 합에서 2명씩 제외해 100이 되면 제외한 나머지 7명이 일곱 난쟁이

// reduce()함수
// [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function solution(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((sum - (answer[i] + answer[j])) == 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
                return answer;
            }
        }
    }

}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));