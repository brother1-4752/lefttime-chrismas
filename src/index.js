const clockTitle = document.querySelector(".js-clock");
let untilChrismas;

function timeUntilChristmas() {
  let currentDate = new Date();
  let christmas = new Date(currentDate.getFullYear(), 11, 25);
  let difference = christmas.getTime() - currentDate.getTime();
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  clockTitle.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until Christmas!`;
}

untilChrismas = setInterval(timeUntilChristmas, 1000);
