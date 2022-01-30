function solution(arr) {
    let answer = arr;
    let n = arr.length;
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log(arr);
    }
    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
// 버블 정렬 패스 횟수는 n-1 (n은 원소 개수)