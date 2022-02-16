function solution(board) {
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 12시 부터 시계 방향, 8방향 (-1,0), (-1,1), (0,1), (1,1), (1,0), (1,-1), (0,-1), (-1,-1)
    let dy = [0, 1, 1, 1, 0, -1, -1, -1]; // 12시 부터 시계 방향, 8방향 (-1,0), (-1,1), (0,1), (1,1), (1,0), (1,-1), (0,-1), (-1,-1)
    let queue = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 0;
                answer++;
                queue.push([i, j]);
                while (queue.length) {
                    let p = queue.shift();          // 현재 x, y 좌표 값
                    for (let k = 0; k < 8; k++) {
                        let nx = p[0] + dx[k];      // 다음 x 좌표 값
                        let ny = p[1] + dy[k];      // 다음 y 좌표 값
                        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny]) {
                            queue.push([nx, ny]);   // 탐색한 x, y 좌표 값
                            board[nx][ny] = 0;
                        }
                    }
                }
            }
        }
    }
    return answer
}
let arr =
    [
        [1, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0]
    ];

console.log(solution(arr));
