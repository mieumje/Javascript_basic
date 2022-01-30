function solution(size, arr) {
    let answer = Array.from({ length: size }, () => 0);

    for (let x of arr) {
        if (!answer.includes(x)) {
            answer.pop();
            answer.unshift(x);
        } else {
            let idx = answer.indexOf(x);
            let prev = idx - 1;
            while (prev >= 0) {
                [answer[prev], answer[prev + 1]] = [answer[prev + 1], answer[prev]];
                prev--;
            }
        }
    }
    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));