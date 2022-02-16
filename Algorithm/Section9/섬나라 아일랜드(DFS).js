function solution(board) {
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 12시 부터 시계 방향, 8방향 (-1,0), (-1,1), (0,1), (1,1), (1,0), (1,-1), (0,-1), (-1,-1)
    let dy = [0, 1, 1, 1, 0, -1, -1, -1]; // 12시 부터 시계 방향, 8방향 (-1,0), (-1,1), (0,1), (1,1), (1,0), (1,-1), (0,-1), (-1,-1)

    function DFS(x, y) {
        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                board[nx][ny] = 0;
                DFS(nx, ny);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 0;
                answer++;
                DFS(i, j);
            }
        }
    }
    board[0][0] = 0;
    return answer;
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