const answer = document.getElementById('answer')
const result = document.getElementById('result')
const submitBTn = document.getElementById('submitBtn')
const kiss = document.getElementById('kissCount')


let kis = 0;

submitBTn.onclick = function(){
  let answers = answer.value;
  if (answers == ''){
    kis++;
    result.textContent = 'wrong'
    kiss.textContent = (`${kis} `)
    return(kis)
  }
  else if(answers ==  1){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  2){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  3){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  4){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  5){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  6){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  7){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  8){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  9){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  10){
    kis++;
    result.textContent = 'wrong';
    kiss.textContent = (`${kis}`)
  }
  else if(answers ==  0){
    kis--;
    result.textContent = 'correct';
    kiss.textContent = (`${kis}`)
  }
  else{
    kis++;
    result.textContent = 'put a real number';
    kiss.textContent = (`${kis}`)
  }
  
} 