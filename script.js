'use script'
//рандомное число
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    number.innerHTML = randomNumber;

    console.log(number);
}

generation.onclick = function() {
    randomNumber();
}

//светофор
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green= document.getElementById('green');
const btn = document.getElementById('btn');

let count = 0;

function switchLight() {
    
    count += 1;

    if ( count == 1){
        red.style.backgroundColor = '#fff';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = '#fff';
    
    } else if (count == 2) {
        red.style.backgroundColor = '#fff';
        yellow.style.backgroundColor = '#fff';
        green.style.backgroundColor = 'green';
    
    } else if (count == 3) {
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = '#fff';
        green.style.backgroundColor = '#fff';

        count = 0;
    }    

}

btn.addEventListener('click', switchLight);