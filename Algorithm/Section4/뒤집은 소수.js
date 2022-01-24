function isPrime(num) {
    if (num === 1) {
        return false;
    }
    let sqrt = Math.floor(Math.sqrt(num));
    for (let i = 2; i < sqrt + 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;

}

function solution(arr) {
    let answer = [];
    for (let x of arr) {
        let tmp = 0;
        while (x) {
            tmp += String(x % 10);
            x = Math.floor(x / 10);
        }
        if (isPrime(parseInt(tmp))) {
            answer.push(parseInt(tmp));
        }
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

console.log(Math.floor(Math.sqrt(9)));