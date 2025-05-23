document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "queene" && password === "chweenie") {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = "main-page.html";

  } else {
    alert("invalid credentials")
  }
});

const message = document.getElementById('message')
const btn = document.getElementById('loginbtn')

btn.addEventListener('click', () => {
  message.classList.add('active')
  btn.style.display = 'none';
})