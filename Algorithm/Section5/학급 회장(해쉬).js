console.time('label');
function solution(s) {
    let answer;
    let newList = {};
    for (let x of s) {
        if (newList[x]) newList[x] += 1;
        else newList[x] = 1;
    }
    let max = 0;
    for (let x of Object.keys(newList)) {
        if (newList[x] > max) {
            max = newList[x];
            answer = x;
        }
    }
    return answer;
}
console.timeEnd('label');

let str = "BACBACCACCBDEDE";
console.log(solution(str));
// solution  time = 0.071ms