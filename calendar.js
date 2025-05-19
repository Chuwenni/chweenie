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

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  const monthLabel = document.getElementById('monthLabel');
  
  // Get first day of the month (0 = Sunday, 1 = Monday, ...)
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  
  // Get the number of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Month names for labeling
  const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

  // Update the month label
  monthLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  // Clear the existing grid (so it can be re-rendered)
  calendarGrid.innerHTML = "";

  // Add empty cells before the first day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day-empty');
    calendarGrid.appendChild(emptyCell);
  }

  // Add the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.textContent = day;
    dayCell.classList.add('day');
    dayCell.addEventListener('click', () => openModal(day));
    calendarGrid.appendChild(dayCell);
  }
}

function changeMonth(offset) {
  currentMonth += offset;

  // Handle year change
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();
}

function openModal(day) {
  const modal = document.getElementById('myModal');
  const modalText = document.getElementById('modalText');
  modalText.textContent = `You clicked on day ${day}`;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', closeModal);

// Initial render of the calendar
renderCalendar();

// Event listeners for changing months
document.getElementById('prevMonth').addEventListener('click', () => changeMonth(-1));
document.getElementById('nextMonth').addEventListener('click', () => changeMonth(1));
