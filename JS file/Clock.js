const Clock = document.querySelector("#Clock");
const Span_1 = Clock.querySelector("span:first-child");
const Span_2 = Clock.querySelector("span:nth-child(2)");
const Span_3 = Clock.querySelector("span:nth-child(3)");

function TimePrint() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();
  const month = date.getMonth();
  const printdate = date.getDate();

  Span_1.innerText = year + "년";
  Span_2.innerText = `${month}월 ${printdate}일`;
  Span_3.innerText = `${hour}:${minute}:${second}`;
}

setInterval(TimePrint, 1000);
