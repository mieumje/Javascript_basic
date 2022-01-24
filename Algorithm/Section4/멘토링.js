function solution(arr) {
    let answer = 0;
    let N = arr[0].length, M = arr.length;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {  // (i번째 학생 : 멘토, j번째 학생 멘티)
            let cnt = 0;
            for (let x = 0; x < M; x++) {   // x번째 시험에서 학생의 등수 = y등
                let cur_i = 0;
                let cur_j = 0;
                for (let y = 0; y < N; y++) {
                    if (arr[x][y] === i) cur_i = y;
                    if (arr[x][y] === j) cur_j = y;
                }
                if (cur_i < cur_j) cnt += 1;
            }
            if (cnt === M) {
                answer += 1;
            }
        }
    }
    return answer;
}

let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
