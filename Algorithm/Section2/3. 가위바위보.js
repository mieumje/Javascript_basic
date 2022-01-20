function solution(a, b) {
    let answer = "";
    l = a.length;
    for (let i = 0; i < l; i++) {
        if (a[i] === b[i]) {  // 무승부
            answer += "D ";
        } else if (a[i] === 1 && b[i] === 2) { // 가위, 바위
            answer += "B ";
        } else if (a[i] === 1 && b[i] === 3) { // 가위, 보
            answer += "A ";
        } else if (a[i] === 2 && b[i] === 1) { // 바위, 가위
            answer += "A ";
        } else if (a[i] === 2 && b[i] === 3) { // 바위, 보
            answer += "B ";
        } else if (a[i] === 3 && b[i] === 1) { // 보, 가위
            answer += "B ";
        } else {                               // 보, 바위
            answer += "A ";
        }
    }
    return answer;

}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));