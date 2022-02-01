function solution(m, songs) {
    let answer;

    let start = Math.max(...songs);
    let end = arr.reduce((prev, cur) => prev + cur);

    while (end >= start) {
        let mid = parseInt((start + end) / 2);
        let cnt = 1;
        let sum = 0;
        for (let x of songs) {
            if (sum + x > mid) {
                sum = x;
                cnt++;
            } else sum += x;
        }
        console.log(start, mid, end, cnt)
        if (cnt <= m) answer = mid, end = mid - 1;
        else start = mid + 1;
    }

    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));