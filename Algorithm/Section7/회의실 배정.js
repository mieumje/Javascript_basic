function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        else a[0] - b[0]
    })
    for (let i = 0; i < meeting.length - 1; i++) {
        let startTime = meeting[i][0];
        let endTime = meeting[i][1];
        let cnt = 1;

        for (let j = i + 1; j < meeting.length; j++) {
            if (meeting[j][0] < endTime) continue;
            else {
                startTime = meeting[j][0];
                endTime = meeting[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);

    }
    return answer;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));
