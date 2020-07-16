var selectedRow;
function onFormSubmit(){
    insertNewRow(getFormDetails());
    clearForm();
}
function clearForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
}
function getFormDetails(){
    var formDetails = {};
    formDetails["fullName"] = document.getElementById("fullName").value;
    formDetails["age"] = document.getElementById("age").value;
    formDetails["salary"] = document.getElementById("salary").value;
    return formDetails;
}
function insertNewRow(data){
    var table = document.getElementById("table");
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerText = data.fullName;
    cell2.innerText = data.age;
    cell3.innerText = data.salary;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = '<a onClick = "selectedData(this)" style = "color : green" style = "">Edit</a>&nbsp;<a onClick ="selectedData(this)" style = "color:red">Delete</a>';
}
function selectedData(td){ 
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerText;
    document.getElementById("age").value = selectedRow.cells[1].innerText;
    document.getElementById("salary").value = selectedRow.cells[2].innerText;
}
function updateTable(){
    selectedRow.cells[0].innerText = document.getElementById("fullName").value;
    selectedRow.cells[1].innerText = document.getElementById("age").value;
    selectedRow.cells[2].innerText = document.getElementById("salary").value;
    clearForm();
}
function deleteRow(){
    document.getElementById("table").deleteRow(selectedRow.rowIndex);
    clearForm();
}