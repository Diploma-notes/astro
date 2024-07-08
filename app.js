// const tamilMonths = [
//   { name: "Chithirai", start: { month: 4, day: 14 }, days: 31 }, // April 14 to May 14
//   { name: "Vaikasi", start: { month: 5, day: 15 }, days: 31 }, // May 15 to June 14
//   { name: "Aani", start: { month: 6, day: 15 }, days: 32 }, // June 15 to July 16
//   { name: "Aadi", start: { month: 7, day: 17 }, days: 31 }, // July 17 to August 16
//   { name: "Aavani", start: { month: 8, day: 17 }, days: 31 }, // August 17 to September 16
//   { name: "Purattasi", start: { month: 9, day: 17 }, days: 31 }, // September 17 to October 17
//   { name: "Aipassi", start: { month: 10, day: 18 }, days: 30 }, // October 18 to November 16
//   { name: "Karthigai", start: { month: 11, day: 17 }, days: 29 }, // November 17 to December 15
//   { name: "Margazhi", start: { month: 12, day: 16 }, days: 29 }, // December 16 to January 13
//   { name: "Thai", start: { month: 1, day: 14 }, days: 30 }, // January 14 to February 12
//   { name: "Masi", start: { month: 2, day: 13 }, days: 30 }, // February 13 to March 14
//   { name: "Panguni", start: { month: 3, day: 15 }, days: 31 }, // March 15 to April 13
// ];
const col_row = [
  "2 / 1",
  "4 / 1",
  "5 / 1",
  "6 / 4",
  "5 / 6",
  "3 / 6",
  "1 / 5",
  "1 / 3",
];

// spawn "p" tag in html

let idx = 0;
for (const place of col_row) {
  let container = document.querySelector(".container");
  let paragraph = document.createElement("p");
  paragraph.setAttribute("class", `p p-${idx}`);
  paragraph.style.gridArea = place;
  container.appendChild(paragraph);
  idx++;
}

const date = new Date();
const planets = ["sun", "mar", "jup", "mer", "ven", "sat", "mon", "pam"];

function checkvalid() {
  if (date.getHours() >= 24 && date.getHours() < 6) {
    date.setDate(date.getDate() - 1);
    console.log(date);
  }
}
const time = {
  hour: date.getHours(),
  minutes: date.getMinutes(),
  day: date.getDay(),
  date: date.toDateString(),
  month: date.getMonth(),
};

console.log(time.hour, time.minutes, time.day, time.date, time.month);
checkvalid();
checkday();
arudam();

function arudam() {
  let minutes = 5;
  let minutes1 = 0;
  for (let idx = 1; idx <= 12; idx++) {
    if (time.minutes >= minutes1 && time.minutes < minutes) {
      const doc = document.querySelector(`.ar-${idx}`);
      const para = document.createElement("p");
      para.setAttribute("class", "insidecontainer");
      para.innerHTML = "Ar";
      doc.appendChild(para);
      idx++;
      break;
    }
    minutes = minutes + 5;
    minutes1 = minutes1 + 5;
  }
}

function checkday() {
  const shiftplanets = (count) => {
    const shiftedplanets = planets.splice(0, count);
    planets.push(...shiftedplanets);
  };
  switch (time.day) {
    case 0:
      checkhours();
    case 1:
      checkhours();
      shiftplanets(6);
    case 2:
      checkhours();
      shiftplanets(1);
    case 3:
      checkhours();
      shiftplanets(3);
    case 4:
      checkhours();
      shiftplanets(2);
    case 5:
      checkhours();
      shiftplanets(4);
    case 6:
      checkhours();
      shiftplanets(5);
  }
}

function checkhours() {
  const isInTimeRange = (starthour, startminute, endhour, endminute) => {
    const currentTime = time.hour * 60 + time.minutes;
    const startime = starthour * 60 + startminute;
    const endtime = endhour * 60 + endminute;
    return currentTime >= startime && currentTime >= endtime;
  };
  if (isInTimeRange(18, 0, 19, 30) || isInTimeRange(6, 0, 7, 30)) {
    updatePlanets();
  } else if (isInTimeRange(19, 30, 21, 0) || isInTimeRange(7, 30, 9, 0)) {
    checkTime(7, 8);
  } else if (isInTimeRange(21, 0, 22, 30) || isInTimeRange(9, 0, 10, 30)) {
    checkTime(6, 8);
  } else if (isInTimeRange(22, 30, 24, 0) || isInTimeRange(10, 30, 12, 0)) {
    checkTime(5, 8);
  } else if (isInTimeRange(0, 0, 1, 30) || isInTimeRange(12, 0, 13, 30)) {
    checkTime(4, 8);
  } else if (isInTimeRange(1, 30, 3, 0) || isInTimeRange(13, 30, 15, 0)) {
    checkTime(3, 8);
  } else if (isInTimeRange(3, 0, 4, 30) || isInTimeRange(15, 0, 16, 30)) {
    checkTime(2, 8);
  } else if (isInTimeRange(4, 30, 6, 0) || isInTimeRange(16, 30, 18, 0)) {
    checkTime(1, 8);
  }
}

function checkTime(star, end) {
  idx = 0;
  let change = planets.splice(star, end);
  planets.unshift(...change);
  updatePlanets();
}

function updatePlanets() {
  planets.forEach((place, idx) => {
    const para = document.querySelector(`.p-${idx}`);
    para.innerHTML = place;
  });
}
