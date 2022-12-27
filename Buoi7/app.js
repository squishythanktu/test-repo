function getUserInputHandler(){
    const userInput = document.querySelector('#userInput');
    const result = document.querySelector('#result');
    const result_arr = document.querySelector('#result-arr');
    let sum = 0, num;

    num = parseInt(userInput.value);

    for(let i = 0; i <= num; i++){
        sum += num;
    }    
    result.innerHTML = "The result of sum is " + sum;
    
    ////////////////////// 

    let arr = [];
    let arr_result = '';
    
    for(let i = 1; i <= num; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        }
        else if(i % 5 == 0) {
            arr.push("Buzz");
        }
        else if(i % 3 == 0) {
            arr.push("Fizz");
        }
        else {
            arr.push(i);
        }
    }
    
    arr.forEach(item => {
        arr_result += " " + item.toString();
    })

    result_arr.innerHTML = "The result of array is " + arr_result;
}