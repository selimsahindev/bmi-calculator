window.onload = onWindowLoaded;

function onWindowLoaded() {
  const userData = getUserDataFromCookie();
  const bmi = calculateBmi(userData.height, userData.weight);
  const result = getBmiResult(bmi);
  const riskColor = getRiskColor(result.risk);

  const recalculateButton = document.getElementById('recalculateButton');
  recalculateButton.addEventListener('click', handleRecalculateButtonClick);

  const introSentence = document.getElementById('introSentence');
  introSentence.innerText = `Hello ${userData.firstName} ${userData.lastName}!`
  
  const bmiText = document.getElementById('bmiText');
  bmiText.innerText = `${bmi.toFixed(1)}`
  bmiText.style.color = riskColor;
  
  const riskText = document.getElementById('riskText');
  riskText.innerHTML = `You are at <b><span style="color: ${riskColor};">${result.risk}</span></b> risk.`;
    
  const descriptionText = document.getElementById('descriptionText');
  descriptionText.innerHTML = `${result.description}`;
}

const handleRecalculateButtonClick = (event) => {
  event.preventDefault();
  window.location.replace(window.location.origin);
}

const calculateBmi = (height, weight) => (weight == 0) ? null : (weight / Math.pow(height, 2) * 10000);

const getRiskColor = (risk) => {
  const riskLowerCase = risk.toLowerCase();
  return riskLowerCase === 'low' ? 'green' : (riskLowerCase === 'moderate' ? 'orange' : 'red');
}

const getUserDataFromCookie = () => {
  const userData = {
    firstName: getCookie('firstName'),
    lastName: getCookie('lastName'),
    height: getCookie('height'),
    weight: getCookie('weight'),
  }
  return userData;
}

const getBmiResult = (bmi) => {
  let result = {};

  if (bmi < 18.5) {
    result.risk = 'Low';
    result.description = 'AT RISK of nutritional deficiency and osteoporosis. You are encouraged to eat a balanced meal and to seek medical advice if necessary.';
  } 
  else if (bmi < 25) {
    result.risk = 'Low';
    result.description = 'Achieve a healthy weight by balancing your caloric input (diet) and output (physical activity).';
  }
  else if (bmi < 30) {
    result.risk = 'Moderate';
    result.description = 'Aim to lose 5% to 10% of your body weight over 6 to 12 months by increasing physical activity and reducing caloric intake.';
  }
  else {
    result.risk = 'High';
    result.description = 'Aim to lose 5% to 10% of your body weight over 6 to 12 months by increasing physical activity and reducing caloric intake. Go for regular health screening to keep co-morbid conditions* in check.';
  }

  return result;
}
