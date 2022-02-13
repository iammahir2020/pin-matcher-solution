let count = 3;
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    // console.log(pinString.length);
    if(pinString.length == 4){
        // console.log(pinString)
        return pin;
    }else{
        // console.log('pin size small')
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    // console.log(pin)
    document.getElementById('displayPin').value = pin;
    document.getElementById('no-match').style.display = 'none';
    document.getElementById('yes-match').style.display = 'none';
    count = 3;
    document.getElementById('try-count').innerText = count;
    document.getElementById('type-numbers').value = '';
    document.getElementById('count-holder').style.display = 'block';
}

// const buttonList = document.getElementsByClassName('button');
// for(const button of buttonList){
//     button.addEventListener('click', function(event){
//         console.log(event.target.innerText)
//     })
// }

document.getElementById('key-pad').addEventListener('click', function(event){
    // console.log(event.target.innerText)
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        // console.log(number)
        if(number == 'C'){
            calcInput.value = '';
        }else if(number == '<'){
            const previousNumber = calcInput.value;
            const newNumber = previousNumber.slice(0, -1);
            calcInput.value = newNumber;
        }
    }else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
   
})

function verifyPin(){
    if(count == 0){
        count = 3;
        alert('You have no more tries left')
        window.location.href = 'index.html';
    }
    const generatedPin = document.getElementById('displayPin').value;
    const inputPin = document.getElementById('type-numbers').value;
    // console.log(generatedPin,inputPin);
    // console.log(typeof(generatedPin));
    const yesMatch = document.getElementById('yes-match');
    const noMatch = document.getElementById('no-match');
    if(generatedPin == inputPin && generatedPin.length != 0){
        yesMatch.style.display = 'block';
        noMatch.style.display = 'none';
        count = 3;
        document.getElementById('count-holder').style.display = 'none';
    }else{
        noMatch.style.display = 'block';
        yesMatch.style.display = 'none';
        count--;
        document.getElementById('try-count').innerText = count;
    }
}