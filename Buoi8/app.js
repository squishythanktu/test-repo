// const userInput = document.querySelector('#userInput');
// const sendButton = document.querySelector('#sendButton');

// sendButton.addEventListener('click', () => {
//     const arr = userInput.value.split('');
//     let result = "";
//     arr.forEach(char => {
//         result = result + char + char;
//     });
    
//     alert('Result is ' + result);
// })

// Free Shipping

function freeShipping(props) {
    let sum = 0;
    for(let key in props) {
        sum += props[key];
    }
    if(sum > 50) {
        return true;
    }
    else {
        return false;
    }
}

console.log(freeShipping({"Shampoo": 5.99, "Rubber Ducks": 15.99}))
console.log(freeShipping({"Flatscreen TV": 399.99}))