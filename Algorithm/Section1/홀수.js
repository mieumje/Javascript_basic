function solution(arr) {
    let answer = [];
    let tmp = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
            tmp.push(arr[i])
        }
    }
    answer.push(sum)
    let min = tmp[0];
    for (let i = 1; i < tmp.length; i++) {
        if (tmp[i] < min) {
            min = tmp[i]
        }
    }
    answer.push(min)
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));