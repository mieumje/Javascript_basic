function solution(m, product) {
    let answer = 0;
    let length = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for (let i = 0; i < length; i++) {  // 첫번째 상품부터 마지막 상품까지 할인을 적용한 상태로 계산
        let cnt = 1;
        let money = m - ((product[i][0] / 2) + product[i][1]);
        for (let j = 0; j < length; j++) {
            if (i === j) {  // 이미 할인이 적용된 상품은 건너뛰고 진행
                continue;
            }
            if (product[j][0] + product[j][1] > money) {    // 남은 금액보다 다음 상품을 구매할 금액이 크면 반복문 종료
                break;
            } else {
                cnt += 1;                                   // cnt += 1
                money -= product[j][0] + product[j][1];     // 남은 금액보다 다음 상품을 구매할 금액이 작으면 남은 금액에서 차감
            }
        }
        answer = Math.max(answer, cnt); // 첫번째 상품부터 마지막 상품까지 할인을 적용한 후 계산된 숫자를 비교하면서 최대값 찾기
    }
    return answer;
}

let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));