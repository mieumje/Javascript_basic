function solution(s) {
    let answer = "YES";
    let tmp = [];
    for (let x of s) {
        if (x === '(') tmp.push(x);
        else tmp.pop(-1);
    }
    if (tmp.length > 0) return "NO"
    return answer
}

let a = "(()(()))(()";
console.log(solution(a));