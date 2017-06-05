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
