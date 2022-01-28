function solution(s) {
    let answer;
    let tmp = [];
    for (let x of s) {
        if (x === ')') while (tmp.pop() !== '(');
        else tmp.push(x);
        console.log(tmp);
    }
    return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
