function solution(s, t) {
    let answer = [];
    let left = [], right = [];
    let cnt = 0;
    for (let x of s) {
        if (x === t) {
            cnt = 0;
            left.push(cnt);
        } else {
            cnt += 1;
            left.push(cnt);
        }
    }
    cnt = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            cnt = 0;
            right.push(cnt);
        } else {
            cnt += 1;
            right.push(cnt);
        }
    }
    right = right.reverse();
    for (let i = 0; i < left.length; i++) {
        answer.push(Math.min(left[i], right[i]));
    }
    return answer;
}

let str = "teachermode";
console.log(solution(str, 'e'));