console.time('label');
function solution(str1, str2) {
    let answer = "YES";
    let str1_list = {};
    let str2_list = {};
    for (let x of str1) {
        if (str1_list[x]) str1_list[x]++;
        else str1_list[x] = 1;
    }
    for (let x of str2) {
        if (str2_list[x]) str2_list[x]++;
        else str2_list[x] = 1;
    }

    for (let i of Object.keys(str1_list)) {
        if (str1_list[i] !== str2_list[i]) return "NO"
    }
    return answer;
}
console.timeEnd('label');

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
// solution  time = 0.072ms