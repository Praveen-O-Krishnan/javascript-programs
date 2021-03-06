function addRow() {
  var tbl = document.getElementById("table");
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
}

function addContent() {
  var strng = prompt("Enter the value to add: ", "");
  var tbl = document.getElementById("table");
  var row = tbl.insertRow(0);
  var cell1 = row.insertCell(0);
  for (var i = 1; i <= tbl.rows.length; i++) {
    if (tbl.rows.length !== 0) {
      cell1.innerHTML = strng;
    }
  }
}

function fibonacci() {
  var input = document.getElementById("value").value;
  var i = 2;
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  while (i <= input) {
    fib[i] = fib[i - 2] + fib[i - 1];
    document.getElementById("result").innerHTML += fib[i] + " ";
    i++;
  }
}

function isPrime() {
  var input = document.getElementById("prime").value;
  var prime;
  if (isNaN(input)) {
    alert("Please enter a numeric value!");
  }

  for (var i = 2; i < input; i++) {
    if (input % i === 0) {
      alert("Its not a prime number");
      return false;
    }
    prime = input !== 1;
    alert("Its a prime number");
  }
}

function validateEmail() {
  var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var input = document.getElementById("email").value;
  var emailCheckBx = document.getElementById("emailCheckbox").checked;
  var result = email.test(input);
  if (input === "") {
    document.getElementById("errorBox").innerHTML =
      "Field is empty! Please enter email?";
    return false;
  } else if (result === true) {
    if (emailCheckBx === true) {
      document.getElementById("submitEmail").submit();
    } else {
      document.getElementById("errorBox").innerHTML =
        "Checkbox should be checked!";
      return false;
    }
  } else {
    document.getElementById("errorBox").innerHTML = "Invalid Email";
    return false;
  }
}

function isVowels() {
  var vwls = document.getElementById("vowels").value;
  var vowelsReg = /[aeiou]/;
  if (vwls === "") {
    alert("Field cannot be empty");
    return false;
  }
  if (isNaN(vwls)) {
    var result = vowelsReg.test(vwls);
    if (result === true) {
      alert("Vowels are there in the string");
    } else {
      alert("No Vowels there in the string");
    }
  } else {
    alert("Please enter a proper text!");
    document.getElementById("vowels").value = "";
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
  var addBtn = document.getElementById("addTaskBtn");
  var i = 0;
  addBtn.addEventListener("click", function() {
    var input = document.getElementById("inputTask").value;
    if (input === "") {
      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML = "Please enter a task";
    } else {
      i++;
      document.getElementById("tasks").innerHTML +=
        '<li class="task" id="task"><input type="checkbox" name="" value=""><span class="text-field" id="textfld_' +
        i +
        '">' +
        input +
        '</span><img id="del_' +
        i +
        '" src="img/delete_icon.png" alt="delete" onclick="deleteTodoList(this.id)"> <img id="edit_' +
        i +
        '" src="img/edit_icon.png" alt="edit" onclick="editTodoList(this.id)"></li>';
      document.getElementById("inputTask").value = "";
      document.getElementById("error").style.display = "none";
    }
  });
}

function deleteTodoList(clicked_id) {
  var elem = document.getElementById(clicked_id);
  elem.parentNode.remove(elem);
}

function editTodoList(edit_id) {
  alert("Enter after edit the text..");
  var elem = document.getElementById(edit_id);
  var count = edit_id.substr(edit_id.indexOf("_") + 1);
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", elem.parentNode.textContent);
  input.setAttribute("onkeypress", "saveEdit(event, this.id)");
  input.setAttribute("id", "editTxt_" + count);
  var editField = document.getElementById("textfld_" + count);
  document.getElementById("textfld_" + count).innerHTML = "";
  editField.appendChild(input);
}

function saveEdit(e, id) {
  var key = e.keyCode || e.which;
  if (key == 13) {
    var txtFldId = document.getElementById(id).value;
    var i = id.substr(id.indexOf("_") + 1);
    if (txtFldId !== "") {
      document.getElementById("textfld_" + i).innerHTML = txtFldId;
    } else {
      alert("Field is empty!");
      return false;
    }
  }
}

function getMovieTitles() {
  movieArr = [];
  var title = new XMLHttpRequest();
  title.open("GET", "json/movies.json");
  title.onload = function() {
    var ourData = JSON.parse(title.responseText);
    var formOutput = '<form class="movie-title">';
    formOutput +=
      '<select id="movie_select" class="movie-list" onchange="movieSelect()" >';
    formOutput += '<option value="">--- Select Movies ---</option>';
    for (var i = 0; i < ourData.movies.length; i++) {
      formOutput +=
        '<option value="' + i + '">' + ourData.movies[i].title + "</option>";
    }
    formOutput += "</select>";
    formOutput += "</form>";
    document.getElementById("movieTitle").innerHTML = formOutput;
  };
  title.send();

  // if(localStorage.movieRecord) {
  //   movieArr = JSON.parse(localStorage.movieRecord);
  //   console.log(movieArr);
  // }
}

function movieSelect() {
  var selectBox = document.getElementById("movie_select");
  var movieIndex = selectBox.options[selectBox.selectedIndex].value;
  getMovieInfo(movieIndex);
}

function getMovieInfo(index) {
  var movieInfo = new XMLHttpRequest();
  movieInfo.open("GET", "json/movies.json");
  movieInfo.onload = function() {
    var movieInfoData = JSON.parse(movieInfo.responseText);
    var output = "<ul>";
    output += "<li>Year: " + movieInfoData.movies[index].year + "</li>";
    output += "<li>Genre: " + movieInfoData.movies[index].genre + "</li>";
    output += "<li>Director: " + movieInfoData.movies[index].director + "</li>";
    output += "</ul>";
    document.getElementById("movieInfo").innerHTML = output;

    var imgThmb = "";
    imgThmb += '<img src="' + movieInfoData.movies[index].thumb + '">';
    document.getElementById("movieThumb").innerHTML = imgThmb;
  };
  movieInfo.send();
}

function addMovie() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function validateMovie(form) {
  var movieName = document.getElementById("movieName").value;
  var movieYr = document.getElementById("movieYear").value;
  var movieGenre = document.getElementById("movieGenre").value;
  var movieDirector = document.getElementById("movieDirector").value;

  // if(movieName === "" || movieYr ==="" || movieGenre ==="" || movieDirector === "") {
  //   document.getElementById('errorFormBox').style.display = 'block';
  //   document.getElementById('errorFormBox').innerHTML = 'One of the fields are empty, please enter!';
  //   return false;
  // }
  if (movieName !== "") {
    var json = {
      title: movieName,
      year: movieYr,
      genre: movieGenre,
      director: movieDirector
    };
    movieArr.push(json);
    var resultString = JSON.stringify(movieArr);
    //console.log(localStorage.movieRecord);
    fs.writeFile("json/movies.json", resultString, "utf8", callback);

    fs.readFile("json/movies.json", "utf8", function readFileCallback(
      err,
      data
    ) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push({ id: 2, square: 3 }); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile("json/movies.json", json, "utf8", callback); // write it back
      }
    });

    // fs.readFile('json/movies.json', 'utf8', function readFileCallback(err, data){
    // if (err){
    //     console.log(err);
    // } else {
    // obj = JSON.parse(data); //now it an object
    // obj.table.push({id: 2, square:3}); //add some data
    // json = JSON.stringify(obj); //convert it back to json
    // fs.writeFile('json/movies.json', json, 'utf8', callback); // write it back
    // }});
    //var htmll = JSON.stringify(json);
    //document.getElementById('output').innerHTML = htmll;
    return false;
  }
}

function valEmployeeReg() {
  var fields = [
    "empID",
    "empName",
    "dob",
    "age",
    "address",
    "contact",
    "areaOfInterest",
    "yrsOfExp",
    "qualification"
  ];
  var dobPattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

  for (var i = 0; i < fields.length; i++) {
    if (document.getElementById(fields[i]).value === "") {
      alert("please enter empty fields");
      return false;
    }
  }

  if (isNaN(document.getElementById("empID").value)) {
    alert("Enter a numeric value!");
    return false;
  }

  if (!isNaN(document.getElementById("empName").value)) {
    alert("Name cannot be numeric!");
    return false;
  }

  if (dobPattern.test(document.getElementById("dob").value) !== true) {
    alert("Date formate is wrong, please follow the example in the field");
    return false;
  }

  if (frm1.gender[0].checked === false && frm1.gender[1].checked === false) {
    alert("Please choose your Gender: Male or Female");
    return false;
  }

  if (isNaN(document.getElementById("age").value)) {
    alert("Enter a numeric value!");
    return false;
  }
}

function giveArrCount() {
  var count = document.getElementById("arrayCount").value;
  var trigger;
  var i = 1;
  var input = [];
  if (isNaN(count)) {
    alert("Please enter numeric value!");
  }

  while (i <= count) {
    trigger = prompt("Enter value", count);
    triggerNum = parseInt(trigger);
    i++;
    input.push(triggerNum);
  }
  var result = arraySummation(input);
  var resultClass = document.getElementById("ArrayResult");
  resultClass.className = "result";
  arrayDetail.className = "result";
  document.getElementById("arrayDetail").innerHTML = "Array: " + input;
  document.getElementById("ArrayResult").innerHTML = "Result: " + result;
  document.getElementById("arrayCount").value = "";
}

function arraySummation(input) {
  var output;
  output = 0;
  for (var i = 0; i < input.length; i++) {
    output += input[i];
  }
  return output;
}

function capitl2nd() {
  var val = document.getElementById("makeCap").value;
  var valToArr = val.split(" ");
  var result = valToArr[1].toString().toUpperCase();
  document.getElementById("result").innerHTML = result;
}

function makeMulTable() {
  var value = document.getElementById("getNum").value;
  for (var i = 1; i <= 10; i++) {
    console.log(i + " " + value + " " + i * value);
  }
}

function calcuator(operation) {
	var val = function(a,b) {
		switch(operation) {
            case '1' :
			return a + b;
			//break;

			case '2' :
			return a * b;
			//break;

			case '3' :
			return a - b;
			//break;

			case '4' :
			return a / b;
			//break;

            default:
			return 'invaid input';
		}
	};	
	
	return val;
}

function calculateOperation(a, v1, v2) {
	var selectedOperation = calcuator(a);
	var result = selectedOperation(v1, v2);
	document.getElementById('whichOperationResult').style.display = "block";
	document.getElementById('whichOperationResult').innerHTML = 'You selected operation ' + a + ' and value entered ' + v1 + ' , ' + v2 +  ' and result is ' + result;
}


function whichOperation() {
	var num = document.querySelector('.js-selectedCalNumber').value;
	if(!isNaN(num)) {
		if(num > 4 || num < 1) {
			alert('wrong selection');
			document.querySelector('.js-selectedCalNumber').value = '';
		} else {
			var inpuVal = document.querySelector('.js-inputValues');
			var val1 = prompt('First number', '');
			var val2 = prompt('Second number', '');
			var val_1 = parseInt(val1);
			var val_2 = parseInt(val2);
			calculateOperation(num, val_1, val_2);
			document.querySelector('.js-selectedCalNumber').value = '';
		}
		
	} else {
		alert('Plese enter numeric value!');
		document.querySelector('.js-selectedCalNumber').value = '';
		return false;
	}
}

