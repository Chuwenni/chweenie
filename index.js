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

