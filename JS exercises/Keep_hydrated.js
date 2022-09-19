// Calculates how many liters of water drank during workout

function litres(time) {
  let lit = 0.5;
  let cyclingTime = Math.floor(time);
  // Determines if time is even or odd and calculates liters drank
  if (cyclingTime % 2 === 0) {
    return cyclingTime * lit;
  } else {
    return (cyclingTime - 1) * lit;
  }
  if (cyclingTime < 1) {
    return 0;
  }
}
