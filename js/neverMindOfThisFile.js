import { refs } from "./refs.js";
//console.log(refs.dataValue.textContent);

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });
const targetDate = new Date("Jul 17, 2019");

function timer1(day) {
  let targetDate = day.getTime();
  let timeIsNow = Date.now();
  let leftTime = targetDate - timeIsNow;

  const getItemOfTimes = {
    days: Math.floor(leftTime / (1000 * 60 * 60 * 24)),
    hours: Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((leftTime % (1000 * 60)) / 1000),
  };

  refs.dataValue.textContent = getItemOfTimes.days;
  refs.hoursValue.textContent = getItemOfTimes.hours;
  refs.minsValue.textContent = getItemOfTimes.mins;
  refs.secondValue.textContent = getItemOfTimes.secs;
}

setInterval(() => timer1(targetDate), 1000);
