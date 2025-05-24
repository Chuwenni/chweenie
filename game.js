const display = document.getElementById('display');
const kissCount = document.getElementById('kiss-count');
const result = document.getElementById('result');
const hidden = document.getElementById('hidden');
const btn = document.querySelector('btns');
const title = document.getElementById('title');
const trybtn = document.getElementById('try-again')

let kiss = 0;
const minNum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random()*(maxnum - minNum + 1))+ minNum


let guess;
let running = true;

function displaynum(input){
  display.value += input;
}

function Del(){
  display.value = ''
}


while(running){

  


  function Enter(input){

    if (display.value == ''){
      result.textContent = 'Pls put a number';
    }
    else{
      if(display.value > answer){
       result.textContent = 'Too high'
       result.style.color = 'red'
       kiss++;
       kissCount.textContent = `${kiss}`
      }
      else if(display.value < answer){
       result.textContent = 'Too low'
       result.style.color = 'rgb(255, 13, 13)'
       kiss++;
       kissCount.textContent = `${kiss}`
      }
      else{
        result.textContent = 'Correct'
        result.style.color = 'rgb(14, 234, 14)'
        title.textContent = `You Have To Kiss Me ${kiss} Times`;
        trybtn.style.display = 'inline-block';
      }
    }
  }
  running = false;
}
