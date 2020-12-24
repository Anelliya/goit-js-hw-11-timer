import { refsNewYearTimer } from "./refs.js";
//console.log(refsNewYearTimer);

// const targetDate = new Date("Jul 17, 2021");

const CountdownTimer = function (object) {
  this.targetDate = object.targetDate;
  this.leftTime = this.targetDate - Date.now();
  this.timerContainer = object.selector;

  this.daysLeft = document.querySelector(
    `${this.timerContainer} [data-value=days]`
  );
  this.hoursLeft = document.querySelector(
    `${this.timerContainer} [data-value=hours]`
  );
  this.minsLeft = document.querySelector(
    `${this.timerContainer} [data-value=mins]`
  );
  this.secsLeft = document.querySelector(
    `${this.timerContainer} [data-value=secs]`
  );

  this.getItemOfTimes = {
    days: Math.floor(this.leftTime / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (this.leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    mins: Math.floor((this.leftTime % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((this.leftTime % (1000 * 60)) / 1000),
  };

  this.daysLeft.textContent = this.getItemOfTimes.days;
  this.hoursLeft.textContent = this.getItemOfTimes.hours;
  this.minsLeft.textContent = this.getItemOfTimes.mins;
  this.secsLeft.textContent = this.getItemOfTimes.secs;
};

const newYearTimer = {
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
};

setInterval(() => new CountdownTimer(newYearTimer), 1000);
