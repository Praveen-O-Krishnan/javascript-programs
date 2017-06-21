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
  }

  for(var i = 2; i < input; i++) {
    if(input % i === 0) {
      alert('Its not a prime number');
      return false;
    }
    prime =  input !== 1;
    alert('Its a prime number');
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

function isVowels() {
  var vwls = document.getElementById('vowels').value;
  var vowelsReg = /[aeiou]/;
  if(vwls === '') {
    alert('Field cannot be empty');
    return false;
  }
  if(isNaN(vwls)) {
    var result = vowelsReg.test(vwls);
    if(result === true) {
      alert('Vowels are there in the string');
    } else {
      alert('No Vowels there in the string');
    }
  } else {
    alert('Please enter a proper text!');
    document.getElementById('vowels').value = '';
    return false;
  }
}

// $("#submitEmail").submit(function(e) {
// var emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       var actionurl = e.currentTarget.action;
//       var email = $('#email').val();
//       var result = emailValidation.test(email);
//       var emailCheckBx = document.getElementById('sozlesme').checked;
//       if(email === "") {
//         alert('Field is empty! Please enter email?');
//         return false;
//       } else if(result === true) {
//           if(emailCheckBx === true) {
//               $.ajax({
//                   url: actionurl,
//                   type: 'GET',
//                   data : { text : email},
//                   success: function(data) {
//                    alert(data);
//                       if(data) {
//                        alert("You were already subscribed");
//                       } else {
//                        alert("You are subscribed to Newsletter");
//                       }
//                   }
//                 });
//           } else {
//             alert('Checkbox should be checked!');
//             return false;
//           }
//       } else {
//         alert('Invalid Email');
//         return false;
//       }
//      //prevent Default functionality
//       e.preventDefault();
//   });

function todolist() {
  var addBtn = document.getElementById('addTaskBtn');
  var i = 0;
  addBtn.addEventListener('click', function() {
    var input = document.getElementById('inputTask').value;
    var result;
    if(input === '') {
      document.getElementById('error').style.display = 'block';
      document.getElementById('error').innerHTML = 'Please enter a task';
    } else {
      i++;
      document.getElementById('tasks').innerHTML += '<li class="task" id="task"><input type="checkbox" name="" value=""><span class="text-field" id="textfld_'+i+'">'+input+'</span><img id="del_'+i+'" src="img/delete_icon.png" alt="delete" onclick="deleteTodoList(this.id)"> <img id="edit_'+i+'" src="img/edit_icon.png" alt="edit" onclick="editTodoList(this.id)"></li>';
      document.getElementById('inputTask').value = '';
      document.getElementById('error').style.display = 'none';
    }
  });
}

function deleteTodoList(clicked_id) {
  var elem = document.getElementById(clicked_id);
  elem.parentNode.remove(elem);
}

function editTodoList(edit_id) {
  alert('Enter after edit the text..');
  var elem = document.getElementById(edit_id);
  var count = edit_id.substr(edit_id.indexOf('_')+1);
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', elem.parentNode.textContent);
  input.setAttribute('onkeypress','saveEdit(event, this.id)');
  input.setAttribute('id','editTxt_'+count);
  var editField = document.getElementById('textfld_'+count);
  document.getElementById('textfld_'+count).innerHTML = '';
  editField.appendChild(input);
}

function saveEdit(e,id){
 var key = e.keyCode || e.which;
  if (key==13){
     var txtFldId = document.getElementById(id).value;
     var i = id.substr(id.indexOf('_')+1);
     if(txtFldId !== '') {
        document.getElementById('textfld_'+i).innerHTML = txtFldId;
     } else {
       alert('Field is empty!');
       return false;
     }
  }
}


function getMovieTitles() {
  var title = new XMLHttpRequest();
  title.open('GET', 'json/movies.json');
  title.onload = function() {
    var ourData = JSON.parse(title.responseText);
      var formOutput = '<form>';
      formOutput += '<select id="movie_select" class="movie-list" onchange="movieSelect()" >';
      formOutput += '<option value="">--- Select Movies ---</option>';
      for(var i = 0; i < ourData.movies.length; i++) {
        formOutput += '<option value="'+i+'">'+ourData.movies[i].title+'</option>';
      }
      formOutput += '</select>';
			formOutput += '</form>';
      document.getElementById('movieTitle').innerHTML = formOutput;
  };
  title.send();
}

function movieSelect() {
  var selectBox = document.getElementById('movie_select');
  var movieIndex = selectBox.options[selectBox.selectedIndex].value;
  getMovieInfo(movieIndex);
  //console.log(movieIndex);
}

function getMovieInfo(index) {
  var movieInfo = new XMLHttpRequest();
  movieInfo.open('GET','json/movies.json');
  movieInfo.onload = function() {
    var movieInfoData = JSON.parse(movieInfo.responseText);
    console.log(movieInfoData.movies[0].title);
    var output = '<ul>';
      output += '<li>Year: '+movieInfoData.movies[index].year+'</li>';
      output += '<li>Genre: '+movieInfoData.movies[index].genre+'</li>';
      output += '<li>Director: '+movieInfoData.movies[index].director+'</li>';
      output += '</ul>';
      document.getElementById('movieInfo').innerHTML = output;
  };
  movieInfo.send();
}


// function renderMovieName(data) {
//   var htmlString = '';
//   for(var i = 0; i < data.length; i++) {
//     console.log(i);
//     //htmlString += '<div>'+data[i].title+'</div>';
//   }
//
//   movieTitle.insertAdjacentHTML('beforeend', htmlString);
// }
//
// renderMovieName();
