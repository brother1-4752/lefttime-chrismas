const clockTitle = document.querySelector(".js-clock");
const chrismas = new Date(2022, 11, 25); //크리스마스 : 23/12/25
const current = new Date();
const current_year = current.getFullYear();
const current_month = current.getMonth();
const current_date = current.getDate();
const current_hour = current.getHours();
const current_minute = current.getMinutes();
const current_second = current.getSeconds();

console.dir(current - chrismas);
