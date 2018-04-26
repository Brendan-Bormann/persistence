function persistence(num) {
    let count = 0;
    let solved = false;
    let answer = 1;
    let currentNumber = num.toString().split('');
    let updated = false;
    console.log(`\n Starting persistance...`);
    do {
        console.log(` -- Persistance round ${count}.`);
        if (updated === true) {
            currentNumber = answer.toString().split('');
            console.log(` -- -- Running with number ${answer}.`);
        } else {
            console.log(` -- -- Running with number ${num}.`);
        }
        if (currentNumber.length == 1) {
            solved = true;
            console.log(' -- -- Solved!');
            answer = count;
        } else {
                answer = 1;
            for (let i = 0; i < currentNumber.length; i++) {
                answer = answer * parseInt(currentNumber[i]);
            }
            console.log(` -- -- Answer is ${answer}.`);
            
            updated = true;
            count++;
        }
    } while (!solved)
    console.log(` Returning answer: ${answer}.\n`);
    return answer;
}

if (persistence(39) === 3) {
    console.log(` Success!`);
} else {
    console.log(` Failed.`);
}