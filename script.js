
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var number = 0;
function deleteLastEntry(){
  var getTable = document.querySelector('table');
  getTable.deleteRow(1);
 number = number - 1 

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

  

  var getPassword = document.getElementById("password");
  var passOutput = document.getElementById("pass");
  passOutput.innerHTML = "Password: " + getPassword.value;
  
  var getAssignedDate = document.getElementById("dateInput");
  
  var getNotes = document.getElementById("notes");

  number =number +1;
  
  


  // update Table
  
  var displayInTable = document.getElementById("tblData");
  var row = 1;
  var newRow = displayInTable.insertRow(row)

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7)
  cell1.innerHTML = number;
  cell2.innerHTML = getAssignedDate.value;
  cell3.innerHTML = getFirstName.value;
  cell4.innerHTML = getLastName.value;
  cell5.innerHTML = "<input type='checkbox'>"
  cell6.innerHTML = getUserName.value; 
  cell7.innerHTML = getPassword.value;
  cell8.innerHTML = getNotes.value;
  

};


 

function clearForm() {
  var getAssignedDate = document.getElementById("dateInput");
  var getFirstName = document.getElementById("firstNameInput");
  var getLastName = document.getElementById("lastNameInput");
  var getUserName = document.getElementById("usernameInput");
  var getPassword = document.getElementById("password");
  var getNotes = document.getElementById("notes");

  getFirstName.value = "";
  getLastName.value = "";
  getUserName.value = "";
  getNotes.value = "";
  getPassword.value = "";
  getAssignedDate.value = "";
}
function addTblRow(){
   
  var table = document.getElementById("tblData");
  var row =1;
  var newRow = table.insertRow(row)
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var fName = document.getElementById("firstNameInput").value;
  var lName = document.getElementById("lname").value;
  var age = document.getElementById("age").value;

  cell1.innerHTML = fName;
  cell2.innerHTML = lName;
  cell3.innerHTML = age;
}
//add event listener to table rows
let thetable = document.getElementById('tblData').getElementsByTagName('tbody')[0]; 
for (let i = 0; i < thetable.rows.length; i++)
    {
        thetable.rows[i].onclick = function()
        {
            TableRowClick(this);
        };
    }                       

function TableRowClick(therow) {
    let msg = therow.cells[0].innerHTML+'*'+therow.cells[1].innerHTML+'*'+therow.cells[2].innerHTML+'*'+therow.cells[3].innerHTML+'*'+therow.cells[4].innerHTML;
    alert(msg);
};

//clicking the button
document.getElementById("thebutton").addEventListener("click", function(){
    let newRow=document.getElementById('tableMain').getElementsByTagName('tbody')[0].insertRow();
    newRow.innerHTML='<tr><td>11111</td><td>22222</td><td>33333</td><td>44444</td><td>55555</td></tr>';
    newRow.onclick = function() { TableRowClick(this); };
});	