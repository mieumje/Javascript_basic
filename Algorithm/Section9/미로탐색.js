function solution(board) {
    let answer = 0;
    let dx = [-1, 0, 1, 0]; // 12시 방향, 3시 방향, 6시 방향, 9시 방향
    let dy = [0, 1, 0, -1]; // 12시 방향, 3시 방향, 6시 방향, 9시 방향
    function DFS(x, y) {
        if (x === 6 && y === 6) {   // (6,6) 도착 지점
            answer++;
        }
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]; // 다음 이동할 x좌표
            let ny = y + dy[i]; // 다음 이동할 y좌표
            if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && !board[nx][ny]) {
                board[nx][ny] = 1;
                DFS(nx, ny);
                board[nx][ny] = 0;
            }
        }
    }
    board[0][0] = 1;
    DFS(0, 0) // (x,y) (0,0)
    return answer;
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));