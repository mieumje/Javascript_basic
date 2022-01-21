function solution(s) {
    let answer = "YES";
    let tmp = s.toLowerCase().replace(/[^a-z]/g, '');

    if (tmp.split('').reverse().join('') !== tmp) {
        return "NO";
    }
    return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));