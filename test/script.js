function addTblRow(){
   
    var table = document.getElementById("table");
    var row =1;
    var newRow = table.insertRow(row)
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    cell1.innerHTML = fName;
    cell2.innerHTML = lName;
    cell3.innerHTML = age;
}
