console.time('label')
function solution(arr) {
    let answer = 0;
    let dx = [0, 0, -1, 1] // left, right, top, bottom의 x좌표 이동값
    let dy = [-1, 1, 0, 0] // left, right, top, bottom의 y좌표 이동값
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            let flag = 1;
            for (let z = 0; z < 4; z++) {
                let nx = x + dx[z];
                let ny = y + dy[z];
                if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] >= arr[x][y]) {
                    flag = 0;
                    break;
                }
            }
            if (flag) answer += 1;
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
console.timeEnd('label')