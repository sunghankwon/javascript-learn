let today = new Date();

let selectedYear = today.getFullYear();
let selectedMonth = today.getMonth() + 1;
let selectedDate = today.getDate();
let selectedDay = today.getDay();

const realYear = today.getFullYear();
const realMonth = today.getMonth() + 1;
const realDate = today.getDate();

const writeDay = document.getElementById("now_day");
const writeDate = document.getElementById("now_date");
const writeMonth = document.getElementById("now_month");

let lastDay;
let oneDay = new Date(`${selectedYear}-${selectedMonth}-01`).getDay();
//alert(oneDay);

const drawTable = document.querySelectorAll("tbody > tr> th");
//alert(drawTable.length);

const arrowButton = document.querySelectorAll("i");
arrowButton[0].addEventListener("click", function () {
  console.log(this);
  selectedMonth--;
  if (selectedYear === realYear && selectedMonth === realMonth) {
    selectedDate = realdate;
  } else {
    selectedDate = 1;
  }
  if (selectedMonth === 0) {
    selectedYear--;
    selectedMonth = 12;
  }
  selectedDay = new Date(`${selectedYear}-${selectedMonth}-01`).getDay();
  drawCalender();
});
arrowButton[1].addEventListener("click", function () {
  console.log(this);

  selectedMonth++;
  if (selectedYear === realYear && selectedMonth === realMonth) {
    selectedDate = realDate;
  } else {
    selectedDate = 1;
  }
  if (selectedMonth === 13) {
    selectedYear++;
    selectedMonth = 1;
  }
  selectedDay = new Date(`${selectedYear}-${selectedMonth}-01`).getDay();
  drawCalender();
});

for (let i = 0; i < drawTable.length; i++) {
  drawTable[i].idx = i;
  drawTable[i].addEventListener("click", function () {
    console.log(this);

    if (this.idx - oneDay + 1 > lastDay) {
    } else {
      if (this.idx === 0) {
        selectedDay = 0;
        selectedDate = this.idx - oneDay + 1;
      } else {
        let a = this.idx % 7;
        selectedDay = a;
        selectedDate = this.idx - oneDay + 1;
      }
    }
    drawCalender();
  });
}

const drawCalender = () => {
  writeDate.textContent = selectedDate;
  const dateMap = new Map();
  dateMap.set(0, "SUN");
  dateMap.set(1, "MON");
  dateMap.set(2, "TUE");
  dateMap.set(3, "WED");
  dateMap.set(4, "THU");
  dateMap.set(5, "FRI");
  dateMap.set(6, "SAT");

  writeDay.textContent = dateMap.get(selectedDay);

  const monthMap = new Map();
  monthMap.set(1, `JAN ${selectedYear}`, (lastDay = 31));
  monthMap.set(3, `MAR ${selectedYear}`, (lastDay = 31));
  monthMap.set(4, `APR ${selectedYear}`, (lastDay = 30));
  monthMap.set(5, `MAY ${selectedYear}`, (lastDay = 31));
  monthMap.set(6, `JUN ${selectedYear}`, (lastDay = 30));
  monthMap.set(7, `JUL ${selectedYear}`, (lastDay = 31));
  monthMap.set(8, `AUG ${selectedYear}`, (lastDay = 31));
  monthMap.set(9, `SEP ${selectedYear}`, (lastDay = 30));
  monthMap.set(10, `OCT ${selectedYear}`, (lastDay = 31));
  monthMap.set(11, `NOV ${selectedYear}`, (lastDay = 30));
  monthMap.set(12, `DEC ${selectedYear}`, (lastDay = 31));

  writeMonth.textContent = monthMap.get(selectedMonth);

  if (selectedMonth === 2) {
    writeMonth.textContent = `FEB ${selectedYear}`;
    if (selectedYear % 4 === 0) {
      lastDay = 29;
    } else {
      lastDay = 28;
    } //윤년 구분 추가 4로 나눠 떨어지면 29일 아니면 28일
  }

  for (let i = 0; i < 7; i++) {
    let number = 1;
    if (i === oneDay) {
      for (let k = 0; k < 42; k++) {
        drawTable[k].textContent = "";
        drawTable[k].style.color = "black";
      }
      for (let j = oneDay; j < lastDay + oneDay; j++) {
        drawTable[j].textContent = number;
        if (
          selectedYear === realYear &&
          selectedMonth === realMonth &&
          selectedDate === realDate
        ) {
          if (number === selectedDate) {
            drawTable[j].style.color = "red";
          }
        }
        number++;
      }
    }
  }
};

drawCalender();
