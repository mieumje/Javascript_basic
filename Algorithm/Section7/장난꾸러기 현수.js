function solution(arr) {
    let answer = [];
    let h = j = 0;
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > last) {
            h = i + 1;
        } else {
            last = arr[i];
        }
    }
    let first = arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (first > arr[i]) {
            j = i + 1;
        } else {
            first = arr[i];
        }
    }
    console.log(h, j)
    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let brr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
console.log(solution(brr));