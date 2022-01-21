function solution(s) {
    let answer = "YES";
    let tmp = s.toLowerCase();
    let l = Math.floor(tmp.length / 2)
    for (let i = 0; i < l; i++) {
        if (tmp[i] !== tmp[tmp.length - i - 1]) {
            return "NO";
        }
    }

    return answer;
}

let str = "gooooh";
console.log(solution(str));