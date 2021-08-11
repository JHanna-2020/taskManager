var arr = new Array();
function addTask(){
    getTasks();
    arr.push({
        dateInput: Date(),
        taskInput: document.getElementById("input").value
    })
    localStorage.setItem("Task", JSON.stringify(arr));
}
function getTasks(){
    var str = localStorage.getItem("Task");
    if(str != null){
        arr = JSON.parse(str);
    }
}
function updateTable(){
    getTasks();
    var display = document.getElementById("table");

    var x = display.rows.length;
    while(--x){
        display.deleteRow(x);
    }
    for(i = 0; i<arr.length; i++){
        var row = 1;
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0); 
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = arr[i].dateInput; 
        cell2.innerHTML = arr[i].taskInput; 
    }
}