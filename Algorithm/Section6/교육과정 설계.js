function solution(need, plan) {
    let answer = "YES";
    let needCourse = need.split("");
    let planCourse = [];
    let idx = 0;

    for (let i = 0; i < plan.length; i++) {
        if (plan[i] === needCourse[idx]) {
            planCourse.push(plan[i]);
            idx++;
        }
    }
    if (needCourse.length !== planCourse.length) return "NO";

    return answer;
}
function solution2(need, plan) {
    let answer = "YES";
    let needCourse = need.split("");
    for (let x of plan) {
        if (needCourse.includes(x)) {
            if (x !== needCourse.shift()) return "NO";
        }
    }
    if (needCourse.length > 0) return "NO";
    return answer;
}

let a = "CBA";
let b = "CFERWAQWTB";
console.log(solution2(a, b));
// solution  time = 0.071ms
// solution2 time = 0.075ms
