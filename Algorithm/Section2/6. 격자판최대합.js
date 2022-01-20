function solution(arr) {
    let answer;
    let max = 0;
    let row_sum = 0, col_sum = 0;
    let left_sum = 0, right_sum = 0;
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            row_sum += arr[x][y];
            col_sum += arr[y][x];
            if (x === y) {
                left_sum += arr[x][y];
            } else if ((x + y) === 4) {
                right_sum += arr[x][y];
            }
        }
        if (row_sum > col_sum) {
            if (row_sum > max) {
                max = row_sum;
            }
        } else {
            if (col_sum > max) {
                max = col_sum;
            }
        }
        row_sum = 0;
        col_sum = 0;
    }
    answer = Math.max(max, left_sum, right_sum);
    return answer;
}

let arr = [[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr));