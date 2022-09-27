const countTo = "1 Jan 2023";

const count = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const counDown = document.querySelector(".coundown");
  counDown.textContent = `${format(days)}Days ${format(hours)}hrs : ${format(
    minutes
  )}min : ${format(seconds)}sec`;

  if (totalSeconds < 0) {
    counDown.textContent = "Happy New Year";
  }
}, 1000);

function format(it) {
  return it < 10 ? `0${it}` : it;
}
