function solution(s) {
    let answer = "", max = Number.MIN_SAFE_INTEGER;
    for (x of s) {
        if (max < x.length) {
            max = x.length;
            answer = x;
        }
    }
    return answer
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
