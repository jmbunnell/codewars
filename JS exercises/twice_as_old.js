// Сalculatse how many years ago the father was twice as old as his son
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // Variables created
  let doub = (sonYearsOld * 2);
  let years = 0;
 
  // Comapares age differences and calculates years
  if (dadYearsOld > doub) {
      years = dadYearsOld - doub;
  }

  if (dadYearsOld < doub) {
      years = doub - dadYearsOld;
  }
  return years;
}
