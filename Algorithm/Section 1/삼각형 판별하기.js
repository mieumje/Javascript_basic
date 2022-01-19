function solution(a, b, c) {
    let answer = "YES", max;
    if (a < b) {
        max = b
        if (a + c > max) {
            answer = "YES"
        }
        else {
            answer = "NO"
        }
    }
    else {
        max = a
        if (b + c > max) {
            answer = "YES"
        }
        else {
            answer = "NO"
        }
    }
    if (max < c) {
        max = c
        if (a + b > max) {
            answer = "YES"
        }
        else {
            answer = "NO"
        }
    }

    return answer;
}

console.log(solution(6, 7, 11));