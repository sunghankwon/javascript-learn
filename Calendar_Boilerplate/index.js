let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

const realtoday = new Date();

let realyear = today.getFullYear();
let realmonth = today.getMonth() + 1;
let realdate = today.getDate();

let nowday = document.getElementById("now_day");
let nowdate = document.getElementById("now_date");
let nowmonth = document.getElementById("now_month");

var lday;

nowdate.textContent = date;
if (day === 0) {
  nowday.textContent = "SUN";
} else if (day === 1) {
  nowday.textContent = "MON";
} else if (day === 2) {
  nowday.textContent = "TUE";
} else if (day === 3) {
  nowday.textContent = "WED";
} else if (day === 4) {
  nowday.textContent = "THU";
} else if (day === 5) {
  nowday.textContent = "FRI";
} else if (day === 6) {
  nowday.textContent = "SAT";
}

if (month === 1) {
  nowmonth.textContent = `JAN ${year}`;
  lday = 31;
} else if (month === 2) {
  nowmonth.textContent = `FEB ${year}`;
  lday = 28;
} else if (month === 3) {
  nowmonth.textContent = `MAR ${year}`;
  lday = 31;
} else if (month === 4) {
  nowmonth.textContent = `APR ${year}`;
  lday = 30;
} else if (month === 5) {
  nowmonth.textContent = `MAY ${year}`;
  lday = 31;
} else if (month === 6) {
  nowmonth.textContent = `JUN ${year}`;
  lday = 30;
} else if (month === 7) {
  nowmonth.textContent = `JUL ${year}`;
  lday = 31;
} else if (month === 8) {
  nowmonth.textContent = `AUG ${year}`;
  lday = 31;
} else if (month === 9) {
  nowmonth.textContent = `SEP ${year}`;
  lday = 30;
} else if (month === 10) {
  nowmonth.textContent = `OCT ${year}`;
  lday = 31;
} else if (month === 11) {
  nowmonth.textContent = `NOV ${year}`;
  lday = 30;
} else if (month === 12) {
  nowmonth.textContent = `DEC ${year}`;
  lday = 31;
}

var fday = new Date(`${year}-${month}-01`).getDay();
//alert(fday);

const tbody1 = document.querySelectorAll("tbody > tr");
//alert(tbody1.length);
const countTable = document.querySelectorAll("tbody > tr> th");
//alert(countTable.length);

for (i = 0; i < 7; i++) {
  var c = 1;
  if (i === fday) {
    for (j = fday; j < lday + fday; j++) {
      countTable[j].textContent = c;
      if (year === realyear && month === realmonth && realdate === date) {
        if (c === date) {
          countTable[j].style.color = "red";
        }
      }
      c++;
    }
  }
}
