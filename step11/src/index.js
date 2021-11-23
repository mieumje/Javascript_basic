const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const answer = []

function setAnswer() {
    for (let i = 0; i < 3; i++) {
        const idx = Math.floor(Math.random() * numbers.length);
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
    }

    console.log(answer);
}

// validation
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Submit시 초기화 되는 것 막아주는 것
    console.log(1234);
});
