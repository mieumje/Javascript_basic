function solution(arr) {
    let answer = [];
    let sortArr = arr.slice();
    sortArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortArr[i]) answer.push(i + 1);
    }
    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let brr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
//console.log(solution(brr));