const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countSum(str) {

    let arr = str.split(''),
        sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += parseInt(arr[i]);

    }

    return sum;

}


function classWatch(number) {

    let num = parseInt(number);
    let list = [];

    for (let i = num-(num.toString().length)*9; i < num; i++) {

        if (i + countSum(i.toString()) === num) {

            list.push(i);

        }

    }

    console.log(list.length);

    for (let i = 0; i < list.length; i++) {

        console.log(list[i]);

    }

}

rl.question('Input your number: ', (answer) => {

    classWatch(answer);

    rl.close();

});
