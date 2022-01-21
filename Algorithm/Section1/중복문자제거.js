function solution(s) {
    let answer = "";
    let word = {}
    for (let x of s) {
        if (word[x] === undefined) {
            word[x] = 1;
        } else {
            word[x] += 1;
        }
    }
    for (let key of Object.keys(word)) {
        answer += key;
    }
    return answer;
}
console.log(solution("ksekkset"));