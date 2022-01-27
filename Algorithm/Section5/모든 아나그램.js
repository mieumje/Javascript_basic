console.time('label');
function makeAnagram(t) {
    let t_anagram = {};
    for (let x of t) {
        if (t_anagram[x]) t_anagram[x] += 1;
        else t_anagram[x] = 1;
    }
    return t_anagram
}
function checkAnagram(x, t_anagram) {
    let tmp_anagram = makeAnagram(x);
    for (let y of Object.keys(t_anagram)) {
        if (tmp_anagram[y] !== t_anagram[y]) return false
    }
    return true
}
function sliceStrings(s, length) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let tmp = s;
        if (tmp.slice(i, i + length).length == length) arr.push(tmp.slice(i, i + length))
    }
    return arr
}
function solution(s, t) {
    let answer = 0;
    let t_length = t.length;
    let t_anagram = makeAnagram(t);  // T문자열의 아나그램 만들기

    let arr = [];
    arr = sliceStrings(s, t_length); // S에서 T문자열 길이만큼의 부분문자열 구하기

    for (let x of arr) {    // S의 부분 문자열과 T문자열의 아나그램을 비교
        if (checkAnagram(x, t_anagram)) answer += 1;
    }

    return answer;
}
console.timeEnd('label');
let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
// solution  time = 0.1ms