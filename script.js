
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var number = 0;
function deleteLastEntry(){
  var getTable = document.querySelector('table');
  getTable.deleteRow(1);
 

}
function formFillOut() {
  // update Most Recent
  var getFirstName = document.getElementById("firstNameInput");
  var firstNameOutput = document.getElementById("firstName");
  firstNameOutput.innerHTML = "First Name: " + getFirstName.value;

  var getLastName = document.getElementById("lastNameInput");
  var lastNameOutput = document.getElementById("lastName");
  lastNameOutput.innerHTML = "Last Name: " + getLastName.value;

  var getUserName = document.getElementById("usernameInput");
  var userNameOutput = document.getElementById("username");
  userNameOutput.innerHTML = "Username: " + getUserName.value;

  var getEmail = document.getElementById("emailInput");
  var emailOutput = document.getElementById("email");
  emailOutput.innerHTML = "Email: " + getEmail.value;

  var getPassword = document.getElementById("password");
  var passOutput = document.getElementById("pass");
  passOutput.innerHTML = "Password: " + getPassword.value;

  var getAssignedDate = document.getElementById("dateInput");

  // update Table
  
number =number +1;
  var displayInTable = document.getElementById("formInfo");
  var row = 1;
  var newRow = displayInTable.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  cell1.innerHTML = number;
  cell2.innerHTML = getAssignedDate.value;
  cell3.innerHTML = getFirstName.value;
  cell4.innerHTML = getLastName.value;
  cell5.innerHTML = getEmail.value;
  cell6.innerHTML = getUserName.value;
  cell7.innerHTML = getPassword.value;

 

 }


 

function clearForm() {
  var getAssignedDate = document.getElementById("dateInput");
  var getFirstName = document.getElementById("firstNameInput");
  var getLastName = document.getElementById("lastNameInput");
  var getUserName = document.getElementById("usernameInput");
  var getEmail = document.getElementById("emailInput");
  var getPassword = document.getElementById("password");
  getFirstName.value = "";
  getLastName.value = "";
  getUserName.value = "";
  getEmail.value = "";
  getPassword.value = "";
  getAssignedDate.value = "";
}


