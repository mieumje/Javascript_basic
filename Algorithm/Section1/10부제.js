function solution(day, arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (day === 0) {
            if (arr[i] % 10 === 0) {
                answer += 1
            }
        }
        else if ((arr[i] % 10) % day === 0) {
            answer += 1
        }
    }


    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
brr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, brr));