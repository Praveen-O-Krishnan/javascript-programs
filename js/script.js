function addRow() {
  var tbl = document.getElementById("table");
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
}

function addContent() {
  var strng = prompt('Enter the value to add: ', '');
  var tbl = document.getElementById("table");
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
  for(var i=1; i<=tbl.rows.length; i++) {
    if(tbl.rows.length !== 0) {
      cell1.innerHTML = strng;
    }
  }
}

function fibonacci() {
  var input = document.getElementById('value').value;
  var i = 2;
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  while(i<=input) {
    fib[i] = fib[i-2] + fib[i-1];
    document.getElementById('result').innerHTML += fib[i]+ ' ';
    i++;
  }
}

function isPrime() {
  var input = document.getElementById('prime').value;
  var prime;
  if(isNaN(input)) {
    alert('Please enter a numeric value!');
  } else {
    alert('its a numeric value!');
  }
}

function validateEmail() {
  var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var input = document.getElementById('email').value;
  var emailCheckBx = document.getElementById('emailCheckbox').checked;
  var result = email.test(input);
  if(input === '') {
    document.getElementById('errorBox').innerHTML = 'Field is empty! Please enter email?';
    return false;
  } else if(result === true) {
      if(emailCheckBx === true) {
        document.getElementById('submitEmail').submit();
      } else {
        document.getElementById('errorBox').innerHTML = 'Checkbox should be checked!';
        return false;
      }
  } else {
    document.getElementById('errorBox').innerHTML = 'Invalid Email';
    return false;
  }
}
