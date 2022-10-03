// Calculates bmi - best practice!
function bmi(weight, height) {
  var bmi = weight/(height*height);
  
  // Returns bmi results based on results compared to national averages
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else {
    return "Obese";
  };
};


// Another clever way to achieve same results
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
