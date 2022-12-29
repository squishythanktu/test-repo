// function getUserInputHandler(){
//     const userInput = document.querySelector('#userInput');
//     const result = document.querySelector('#result');
//     const result_arr = document.querySelector('#result-arr');
//     let sum = 0, num;

//     num = parseInt(userInput.value);

//     for(let i = 0; i <= num; i++){
//         sum += num;
//     }    
//     result.innerHTML = "The result of sum is " + sum;
    
//     ////////////////////// 

//     let arr = [];
//     let arr_result = '';
    
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 == 0 && i % 5 == 0) {
//             arr.push("FizzBuzz");
//         }
//         else if(i % 5 == 0) {
//             arr.push("Buzz");
//         }
//         else if(i % 3 == 0) {
//             arr.push("Fizz");
//         }
//         else {
//             arr.push(i);
//         }
//     }
    
//     arr.forEach(item => {
//         arr_result += " " + item.toString();
//     })

//     result_arr.innerHTML = "The result of array is " + arr_result;
// }

// JavaScript code

const userInput = document.querySelector('#userInput');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', () => {
    const arr = userInput.value.split(' ');
    arr.forEach(item => {
        parseInt(item)
    })
    let max = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max && arr[i] % 2 == 0) {
            max = arr[i];
        }
    }
    alert('Result of largest even number is ' + max);
    userInput.value = '';
});


const userInput1 = document.querySelector('#userInput1');
const sendButton1 = document.querySelector('#sendButton1');

sendButton1.addEventListener('click', () => {
    let a =  1, b = 1;
    let result;
    let index = parseInt(userInput1.value);
    console.log(index)

    if(index == 0 || index == 1) {
        result = 1;
    }
    else if(index > 1) {
        for(let i = 2; i <= index; i++) {
            result = a + b;
            a = b;
            b = result;
        }
    }
    else {
        result = 'undefined';
    }
    alert('Result of fibonacci[i] is ' + result);
    userInput1.value = '';
});
