function solution(arr) {
    let n = arr.length;
    //let answer = Arrray.from({length : n}, () => 1);
    let answer = Array.from({ length: n }, function () {
        return 1
    });
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i] < arr[j]) {
                answer[i] += 1;
            }
        }
    }
    console.log(answer)
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));