window.onload = displaytime();
window.onload = displayDate();

function displaytime(){
    var time = new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
    setTimeout(displaytime , 1000);
}

function displayDate(){
    var date = new Date().toLocaleDateString('en-AU');
    document.getElementById('date').innerHTML = date;
    setTimeout(displayDate , 1000);
}

function saveStudent() {
    alert(document.getElementById('registrationID').value);
    var button = document.getElementById('save');
    button.remove();
}