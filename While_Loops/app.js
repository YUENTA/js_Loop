// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// 추측 게임 만들기
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    //guess의 현재값을 인자로 받아 정수형으로 변환을 시도
    guess = parseInt(guess);
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if(guess < targetNum){
        // 이 경우, 자연스럽게 guess 값이 정수로 변환할 수 있는 숫자 타입인 지 함께 확인할 수 있음
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    }else{
        //if, else if 조건 모두 만족 못할 경우(숫자값을 입력한 경우나 잘못된 값을 입력한 경우)를 대비하여 else 문을 하나 더 추가해주어야 함.
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}