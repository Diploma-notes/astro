Udayam();

function Udayam() {
  const tamilMonthsDays = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
  const tamilMonths = [
    "Chithirai",
    "Vaikasi",
    "Aani",
    "Aadi",
    "Aavani",
    "Purattasi",
    "Aipassi",
    "Karthigai",
    "Margazhi",
    "Thai",
    "Masi",
    "Panguni",
  ];
  let days;
  function checkday() {
    const gregoreiandate = new Date();
    const tamilyearstart = new Date(gregoreiandate.getFullYear(), 3, 14);
    const diff = gregoreiandate - tamilyearstart;
    days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
    console.log(gregoreiandate.toDateString());
  }
  checkday();

  let cumulativeDays = [0];
  for (let i = 0; i < tamilMonthsDays.length; i++) {
    cumulativeDays.push(cumulativeDays[i] + tamilMonthsDays[i]);
  }

  let month;
  let idx = 1;
  let monthcount;
  for (const currntmonth of tamilMonths) {
    if (days > tamilMonthsDays[idx] && days <= cumulativeDays[idx]) {
      month = currntmonth;
      const doc = document.querySelector(`.ar-${idx}`);
      const para = document.createElement("p");
      para.setAttribute("class", "insidecontainer");
      para.innerHTML = "Sun";
      doc.appendChild(para);
      monthcount = idx - 1;
      break;
    }
    idx++;
  }
  cumulativeDays;
  console.log(cumulativeDays[monthcount]);
  days;
  let diffday = days - cumulativeDays[monthcount];
  diffday;
}
