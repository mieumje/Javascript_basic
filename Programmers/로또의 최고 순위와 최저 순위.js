const ratings = (cnt) => {
    if (cnt === 6) return 1;
    else if (cnt === 5) return 2;
    else if (cnt === 4) return 3;
    else if (cnt === 3) return 4;
    else if (cnt === 2) return 5;
    else return 6;
}

function solution(lottos, win_nums) {
    let answer = [];
    let low_cnt = 0;
    let high_cnt = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] == 0) {
            high_cnt += 1;
        }
        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] == win_nums[j]) {
                low_cnt += 1;
                high_cnt += 1;
            }
        }
    }
    answer = [ratings(high_cnt), ratings(low_cnt)];
    return answer;
}

// 입출력 예
// lottos	                win_nums	                result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	    [3, 5]
// [0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	    [1, 1]

lottos = [44, 1, 0, 0, 31, 25]
win_nums = [31, 10, 45, 1, 6, 19]
console.log(solution(lottos, win_nums))