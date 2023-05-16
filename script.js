let a = document.querySelector('#num1');
let b = document.querySelector('#num2');
let result = document.querySelector('.results');
let btn = document.querySelector('#add');

function resetValues() {
    a.value = '';
    b.value = '';
    result.innerHTML = 'RESULT';
  }

btn.addEventListener('click', () => {
    let num1 = parseInt(a.value);
    let num2 = parseInt(b.value);
    let sum = num1 + num2;
    result.innerHTML = sum;
    setTimeout(resetValues, 5000);
});


