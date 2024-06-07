

document.getElementById('container').addEventListener('submit',function(event){event.preventDefault()});

function Addition() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);

    var add = number1 + number2;
    console.log("Addition is :" + add);
    
}

function Subtraction() {

    var no1 = parseInt(document.getElementById('num1').value);
    var no2 = parseInt(document.getElementById('num2').value);

    var sub = no1 - no2;

    console.log("Subtraction is:" + sub);
    
}

function Multiplication() {

    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var mul = num1 * num2;
    console.log("Multilication is:" + mul);
}

function Division() {

    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);

    var div = n1 / n2;
    console.log("Division is:" + div);
}




