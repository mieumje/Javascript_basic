function solution(s, e) {
    let answer = 0;
    let queue = [];
    let check = Array.from({ length: 10001 }, () => 0);
    let counts = Array.from({ length: 10001 }, () => 0);
    queue.push(s);
    check[s] = 1;

    while (queue.length) {
        let position = queue.shift();
        for (let np of [position - 1, position + 1, position + 5]) {
            if (np === e) {
                return counts[position] + 1;
            }
            if (np >= 1 && np <= 10000 && check[np] === 0) {
                check[np] = 1;
                queue.push(np);
                counts[np] = counts[position] + 1;
            }
        }
    }

    return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));