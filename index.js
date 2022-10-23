const form = document.getElementById('userForm');
form.addEventListener('submit', handleOnSubmit);

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', handleOnClear);

var genderRadios = document.getElementsByName('genderRadioOptions');

function handleOnSubmit(event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById('firstNameInput').value,
    lastName: document.getElementById('lastNameInput').value,
    height: document.getElementById('heightInput').value,
    weight: document.getElementById('weightInput').value,
    birthDate: document.getElementById('birthDateInput').value,
    gender: getGender()
  }

  saveDataToCookie(formData);

  window.location.replace(window.location.origin + '/index.html');
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

  document.getElementById('firstNameInput').value = null;
  document.getElementById('lastNameInput').value = null;
  document.getElementById('heightInput').value = null;
  document.getElementById('weightInput').value = null;
  document.getElementById('birthDateInput').value = null;
  
  console.log(genderRadios);

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
