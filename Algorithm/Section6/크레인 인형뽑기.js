function removeBasketItem(basket) {
    let firstItem = basket[basket.length - 1];
    let secondItem = basket[basket.length - 2];

    if (firstItem === secondItem) {
        basket.pop();
        basket.pop();
        return 2
    } else return 0
}
function solution(board, moves) {
    let answer = 0;
    let basket = [];
    for (let m of moves) {
        let idx = m - 1;
        for (let b of board) {
            if (b[idx] !== 0) {
                basket.push(b[idx]);
                b[idx] = 0;
                break;
            }
        }
        if (basket.length >= 2) {
            answer += removeBasketItem(basket);
        }
    }


    return answer;
}

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));