function solution(s) {
    let answer = "";
    let tmp = s[0];
    let cnt = 0;
    for (let x of s) {
        if (tmp !== x) {
            answer += tmp;
            if (cnt !== 1) {
                answer += cnt;
            }
            tmp = x;
            cnt = 1;
        } else {
            cnt += 1;
        }
    }
    if (tmp) {
        answer += tmp;
    }
    if (cnt !== 1) {
        answer += cnt;
    }
    return answer
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
let abc = "aabaabcccbccbbss";
console.log(solution(abc));