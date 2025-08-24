// secondsToMinutes – Convert seconds (int) to "m:ss"
function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return remainingSeconds < 10
    ? `${minutes}:0${remainingSeconds}`
    : `${minutes}:${remainingSeconds}`;
}

console.log(secondsToMinutes(122));
