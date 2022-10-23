const form = document.getElementById('userForm');
form.addEventListener('submit', handleOnSubmit);

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', handleOnClear);

console.log('cookie readed:' + getCookie('firstName'));

function handleOnSubmit(event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById('firstNameInput').value,
    lastName: document.getElementById('lastNameInput').value,
    height: document.getElementById('heightInput').value,
    weight: document.getElementById('weightInput').value,
    birthDate: document.getElementById('birthDateInput').value
  }

  setCookie('firstName', formData.firstName, 2);

  console.log(formData);

  //window.location.replace(window.location.origin + '/female.html');
}

function handleOnClear(event) {
  event.preventDefault();

  document.getElementById('firstNameInput').value = null;
  document.getElementById('lastNameInput').value = null;
  document.getElementById('heightInput').value = null;
  document.getElementById('weightInput').value = null;
  document.getElementById('birthDateInput').value = null;
}
