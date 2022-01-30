function cal(signal, a, b) {
    if (signal === '+') {
        return parseInt(a) + parseInt(b)
    } else if (signal === '-') {
        return parseInt(a) - parseInt(b)
    } else if (signal === '*') {
        return parseInt(a) * parseInt(b)
    } else if (signal === '/') {
        return parseInt(a) / parseInt(b)
    }
}
function solution(s) {
    let answer;
    let tmp = [];
    for (let x of s) {
        if (x === '+' || x === '-' || x === '*' || x === '/') {
            let b = tmp.pop();
            let a = tmp.pop();
            let calculatedNum = cal(x, a, b);
            tmp.push(calculatedNum).toString;
        } else {
            tmp.push(x);
        }
    }
    answer = tmp[0];
    return answer;
}

let str = "352+*9-";
let str2 = "74*65+2*2/-"
console.log(solution(str2));
