const smallContainer = document.getElementById('picture-div');
const largeContainer = document.getElementById('large-pic');
const smallContainerBtn = document.getElementById('show-pic');
const largeContainerBtn = document.getElementById('show-large-pic');

let showpic = false;
let largeshowpic = false;


smallContainerBtn.addEventListener('click', () => {
  if (!showpic){
    smallContainer.classList.add('active');
    showpic = true;
  }
  else{
    smallContainer.classList.remove('active');
    showpic = false;
  }
})

largeContainerBtn.addEventListener('click', () =>{
  if (!largeshowpic) {
    largeContainer.classList.add('active')
    largeshowpic = true;
  }
  else{
    largeContainer.classList.remove('active');
    largeshowpic = false;
  }
})