console.time('label')
function solution(arr1, arr2) {
    let answer = [];
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let length = arr1.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr1[i] === arr2[j]) {
                answer.push(arr1[i]);
            }
        }
    }
    return answer;
}
console.timeEnd('label')
console.time('label')
function solution2(arr1, arr2) {
    let answer = [];
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let arr1_tmp = arr2_tmp = 0;
    while (arr1_tmp < arr1.length && arr2_tmp < arr2.length) {
        if (arr1[arr1_tmp] === arr2[arr2_tmp]) {
            answer.push(arr1[arr1_tmp++]);
            arr2_tmp++;
        } else if (arr1[arr1_tmp] < arr2[arr2_tmp]) arr1_tmp++;
        else arr2_tmp++;
    }
    return answer
}
console.timeEnd('label')

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
//console.log(solution(a, b));
console.log(solution2(a, b));
// solution  time = 0.076ms
// solution2 time = 0.082ms