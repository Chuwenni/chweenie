const display = document.getElementById('display');
const kissCount = document.getElementById('kiss-count');
const result = document.getElementById('result');
const hidden = document.getElementById('hidden');
const btn = document.querySelector('btns')

let kiss = 0;

function displaynum(input){
  display.value += input;
}

function Del(){
  display.value = ''
}

function Enter(input){

  if (display.value == '') {
    result.textContent = 'Pls put a number'
    result.style.color = 'white'
    result.style.left = '33%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 1){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 2){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 3){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 4){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 5){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 6){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 7){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 8){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 9){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 10){
    display.value = ''
    result.textContent = 'Wrong'
    result.style.color = 'red'
    result.style.left = '45%'
    kiss++;
    kissCount.textContent = `${kiss}`
  }
  else if(display.value == 0){
    display.value = ''
    result.textContent = 'Correct'
    result.style.color = 'rgb(0, 255, 0)'
    result.style.left = '40%'
    kiss--;
    kissCount.textContent = `${kiss}`
  }
  else{
    result.textContent = 'Pls Put 2 Digits Only';
    result.style.left = '30%';
    result.style.color = 'white'
  }
  if (kiss == 10){
    hidden.textContent = 'ang dami pero kulang pa😋😋'
    hidden.style.fontSize = '20px'
  }
  else if (kiss == 20) {
    hidden.textContent = 'Oyy ang dami na busog nako'
    hidden.style.fontSize = '20px'
  }
  else if (kiss == 25) {
    hidden.textContent = 'Ay dinamihan talaga ah'
    hidden.style.fontSize = '20px'
  }
  else if(kiss == 30) {
    hidden.textContent = 'Pag dmoko kiniss ng ganto kadami dmoko love:<<'
    hidden.style.fontSize = '20px'
  }
  else if (kiss == 35){
    hidden.textContent = 'kikiss din kita ng ganto kadami:>>'
    hidden.style.fontSize = '20px'
  }
  else if (kiss == 40){
    hidden.textContent = 'dto na ung limit baka puro laway nko nan'
    hidden.style.fontSize = '20px'
  }
  else if(kiss > 40){
    kiss = 0
    kissCount.textContent = `${kiss}`
  }
}