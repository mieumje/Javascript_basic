function solution(s) {
    let answer = 0;
    let tmp = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' && s[i - 1] === '(') {
            tmp.pop();
            answer += tmp.length;
        } else if (s[i] === ')' && s[i - 1] !== '(') {
            tmp.pop();
            answer += 1;
        } else tmp.push(s[i]);
    }
    return answer;
}

let a = "()(((()())(())()))(())";
let b = "(((()(()()))(())()))(()())";
console.log(solution(a), solution(b));