function solution(s) {
    let answer;
    let midIndex = Math.floor(s.length / 2);
    if (s.length % 2 !== 0) {
        answer = s[midIndex];
    } else {
        answer = s[midIndex - 1] + s[midIndex];
    }
    return answer;
}
console.log(solution("study"));
console.log(solution("abcd"));