function solution(arr) {
    let answer = 0;
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            let point = arr[x][y];
            let top = 0, bottom = 0, left = 0, right = 0;
            if (x === 0) {
                top = 0;
            } else {
                top = arr[x - 1][y];
            }
            if (x === arr.length - 1) {
                bottom = 0;
            } else {
                bottom = arr[x + 1][y];
            }
            if (y === 0) {
                left = 0;
            } else {
                left = arr[x][y - 1];
            }
            if (y === arr.length - 1) {
                right = 0;
            } else {
                right = arr[x][y + 1]
            }
            if (point === Math.max(left, right, top, bottom, point)) {
                answer += 1;
            }
        }
    }

    return answer;
}

let arr = [[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));