console.time('label')
function solution(arr1, arr2) {
    let answer = [];
    for (let x of arr1) {
        answer.push(x);
    }
    for (let y of arr2) {
        answer.push(y);
    }
    answer.sort();

    return answer
}
console.timeEnd('label')
console.time('label')
function solution2(arr1, arr2) {
    let answer = [];
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let tmp1 = tmp2 = 0;
    while (tmp1 < arr1Length && tmp2 < arr2Length) {
        if (arr1[tmp1] < arr2[tmp2]) answer.push(arr1[tmp1++]);
        else answer.push(arr2[tmp2++]);
    }
    while (tmp1 < arr1Length) answer.push(arr1[tmp1++]);
    while (tmp2 < arr2Length) answer.push(arr2[tmp2++]);
    return answer
}
console.timeEnd('label')
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

console.log(solution(a, b));
console.log(solution2(a, b));