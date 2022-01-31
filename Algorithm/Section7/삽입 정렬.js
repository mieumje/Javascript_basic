function solution(arr) {
    let answer = arr;
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > cur) {
            [arr[prev], arr[prev + 1]] = [arr[prev + 1], arr[prev]];
            prev--;
        }
    }
    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));