function getCookie(cookieName) {
  let name = cookieName + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookie.split(';');

  for(let i = 0; i <cookiesArray.length; i++) {
    let c = cookiesArray[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

function setCookie(cookieName, value, daysBeforeExpire) {
  const _date = new Date();
  _date.setTime(_date.getTime() + (daysBeforeExpire*24*60*60*1000));
  let expires = 'expires='+ _date.toUTCString();
  document.cookie = cookieName + '=' + value + ';' + expires + ';path=/';
}
