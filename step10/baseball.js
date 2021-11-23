const readline = require('readline');
const MAX_TRY_COUNT = 9;
const ANSWER_NUMS = [0, 0, 0];
let gStrikeCount;
let gBallCount;
let gTryCount;

// set answer
function setAnswer() {
    do {
        let randNum = Math.floor(Math.random() * 100000) % 1000;

        ANSWER_NUMS[0] = Math.floor(randNum / 100);
        ANSWER_NUMS[1] = Math.floor((randNum % 100) / 10);
        ANSWER_NUMS[2] = randNum % 10;
    }
    while (!hasDuplicatedAndZeroNumber(setAnswer));
}



const isValidNum = inputStr => {
    let msg;
    if (Number.isNaN(inputStr)) {
        msg = '숫자를 입력하세요';
    }
    else if (inputStr.length !== 3) {
        msg = '3자리 숫자를 입력하세요';
    }
    else if (hasDuplicatedAndZeroNumber(inputStr)) {
        msg = '중복된 숫자입니다';
    }

    if (msg) {
        console.log(msg);
        return false;
    }

    return true;
};

// dup check & check zero
const hasDuplicatedAndZeroNumber = val =>
    hasZero(val) ||
    val[0] === val[1] || val[0] === val[2] || val[1] === val[2];


const hasZero = val => val[0] == 0 || val[1] == 0 || val[2] == 0;

// readline
const term = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

term.on('line', line => {
    if (line === 'q') return closeGame(1);
    if (line === 'r') return resetGame();


    if (!isValidNum(line)) return printQuestion();


    for (let i = 0; i < ANSWER_NUMS.length; i++) {
        if (ANSWER_NUMS.includes(Number(line[i]))) {
            if (ANSWER_NUMS[i] === Number(line[i])) gStrikeCount++;
            else gBallCount++;
        }
    }

    if (gStrikeCount === 3 || ++gTryCount > MAX_TRY_COUNT) {
        endGame();
    }

    console.log(`${line} => ${gBallCount}B ${gStrikeCount}S`);
    gBallCount = 0
    gStrikeCount = 0
    printQuestion();
});



// question
const printQuestion = () => {
    term.output.write('Input the 3 Numbers(q: Quit, r: Retry): ');
};


const endGame = () => {
    if (gStrikeCount === 3) {
        console.log("정답입니다");
    }
    else {
        console.log("실패입니다");
    }
    closeGame();

};
const closeGame = () => {
    console.log("게임 종료");
    term.close();
}
const resetGame = () => {
    gStrikeCount = 0;
    gBallCount = 0;
    gTryCount = 0;
    console.clear();

    console.log("새로운 게임 시작 \n");

    printQuestion();
    setAnswer();
};

resetGame();