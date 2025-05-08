const marked = document.querySelectorAll('.marked');
const modal = document.getElementById('myModal');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelectorAll('.close');


marked.forEach(marked => {
  marked.addEventListener('click', () => {
    modalText.textContent = 'Our Monthsary';
    modal.style.display = 'block';
  });
});

closeBtn.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === modal){
    modal.style.display = 'none';
  }
}