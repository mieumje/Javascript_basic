function solution(arr) {
    let answer = arr;
    let n = arr.length;
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
// 버블 정렬로 문제 풀이