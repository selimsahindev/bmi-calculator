var genderRadios = document.getElementsByName('genderRadioOptions');
var firstNameInput = document.getElementById('firstNameInput');
var lastNameInput = document.getElementById('lastNameInput')
var heightInput = document.getElementById('heightInput');
var weightInput = document.getElementById('weightInput');
var birthDateInput = document.getElementById('birthDateInput');

window.onload = fillAllInputs;

document.getElementById('userForm').addEventListener('submit', handleOnSubmit);
document.getElementById('clearButton').addEventListener('click', handleOnClear);

function handleOnSubmit(event) {
  event.preventDefault();

  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    height: heightInput.value,
    weight: weightInput.value,
    birthDate: birthDateInput.value,
    gender: getGender()
  }

  saveDataToCookie(formData);

  window.location.replace(window.location.origin + '/result.html');
}

function saveDataToCookie(data) {
  if (data == null && typeof data === 'undefined') {
    return;
  }

  for (const [key, value] of Object.entries(data)) {
    setCookie(key, value, 2);
    //console.log(typeof key + ' ' + key + ', ' + typeof value + ' ' + value);
  }
}

function handleOnClear(event) {
  event.preventDefault();

  firstNameInput.value = null;
  lastNameInput.value = null;
  heightInput.value = null;
  weightInput.value = null;
  birthDateInput.value = null;

  for (let i = 0; i < genderRadios.length; i++) {
    genderRadios[i].checked = false;
  }
}

function getGender() {
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      return genderRadios[i].id;
    }
  }
  return null;
}

function fillAllInputs() {
  firstNameInput.value = getCookie('firstName');
  lastNameInput.value = getCookie('lastName');
  heightInput.value = getCookie('height');
  weightInput.value = getCookie('weight');
  birthDateInput.value = getCookie('birthDate');
  for (let i = 0; i < genderRadios.length; i++) {
    genderRadios[i].checked = genderRadios[i].id == getCookie('gender');
  }
}
