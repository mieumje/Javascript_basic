const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];
const tries = [];
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $result_div = document.querySelector('#result');
let gBallCnt = 0;
let gStrikeCnt = 0;


function setAnswer() {
    for (let i = 0; i < 3; i++) {
        const idx = Math.floor(Math.random() * numbers.length);
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
    }

    console.log(answer);
}

const checkInput = input => {
    if (input.length !== 3) {
        return alert('3자리 숫자를 입력하세요');
    }
    if (input[0] == 0 || input[1] == 0 || input[2] == 0) {
        return alert('0이 아닌 다른 숫자를 입력하세요');
    }
    if (isNaN(input)) { // isNaN(value) --> 매개변수가 숫자가 아니면 true, 숫자면 false
        return alert('숫자를 입력하세요');
    }
    if (new Set(input).size !== 3) {
        return alert('중복되지 않은 값을 입력하세요\n 예) 122(x), 123(o)');
    }
    if (tries.includes(input)) {
        return alert('이미 시도한 숫자입니다');
    }
    return true;
}

//endgage
const endGame = () => {
    $result_div.innerHTML += '<p id="result_text"><strong>정답을 맞추셨습니다!</strong></p> <br />'
    $result_div.innerHTML += '<button id="game-restart-button" onclick="resetGame_button();">재시작</button>';
}

//score check
const checkScore = tvalue => {
    for (let i = 0; i < tvalue.length; i++) {
        if (Number(tvalue[i]) === answer[i]) gStrikeCnt++;
        else if (tvalue[i] == answer[(i + 1) % 3] || tvalue[i] == answer[(i + 2) % 3]) gBallCnt++;
    }
    if (gStrikeCnt === 0 && gBallCnt === 0) {
        result_string = '낫싱';
        $result_div.innerText = `${result_string}`;
    }
    else if (gStrikeCnt === 3) {
        $result_div.innerText = '';
        endGame();
    }
    else {
        result_string = `${gStrikeCnt}스트라이크, ${gBallCnt}볼`;
        $result_div.innerText = `${result_string}`;
    }
}

// validation
$form.addEventListener('submit', (event) => {
    event.preventDefault(); // Submit시 초기화 되는 것 막아주는 것
    const tvalue = $input.value;
    $input.value = '';
    if (!checkInput(tvalue)) {
        return;
    } else {
        tries.push(tvalue);
        let result_string = checkScore(tvalue);
        //$result_div.innerHTML += `<p>${result_string}</p>`
        //$result_div.innerText = `${result_string}`;
        gStrikeCnt = 0;
        gBallCnt = 0;
    }

    // for (let i = 0; i < tvalue.length; i++) {
    //     if (Number(tvalue[i]) === answer[i]) gStrikeCnt++;
    //     else if (tvalue[i] == answer[(i + 1) % 3] || tvalue[i] == answer[(i + 2) % 3]) gBallCnt++;
    // }
    // console.log(`${gStrikeCnt}스트라이크, ${gBallCnt}볼`);
    // if (gStrikeCnt === 3) {
    //     endGame();
    // }
    // gStrikeCnt = 0;
    // gBallCnt = 0;
});

const resetGame_button = () => {
    gBallCnt = 0;
    gStrikeCnt = 0;
    answer.length = 0;
    tries.length = 0;

    let rtext = document.getElementById("result_text");
    let restart_button = document.getElementById("game-restart-button");

    $result_div.removeChild(rtext);
    $result_div.removeChild(restart_button);
    setAnswer();
}
setAnswer();