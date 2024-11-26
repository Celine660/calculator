let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let spanDay = document.getElementById("spanDay");
let spanMonth = document.getElementById("spanMonth");
let spanYear = document.getElementById("spanYear");

function calculator() {
  let currentDate = new Date();
  let d = currentDate.getDate();
  let m = currentDate.getMonth() + 1;
  let y = currentDate.getFullYear();

  let realDay = d - day.value;
  let realMonth = m - month.value;
  let realYear = y - year.value;

  spanDay.innerText = realDay;
  spanMonth.innerText = realMonth;
  spanYear.innerText = realYear;

  console.log(`${realDay} day, ${realMonth} month, ${realYear} year`);
}
