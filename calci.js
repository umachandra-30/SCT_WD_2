let currentinput='';
let currentoper='';
let previnput='';
justcal=false

function appendnumber(number)
{
    if (justcal) {
        currentinput = '';                 
        justcal = false;        
        }    currentinput+=number;
    document.getElementById('display').value = `${previnput} ${currentoper} ${currentinput}`;
}
function appendoperation(operation) {
    if (currentinput === '' && previnput === '') return;

    if (justcal) {
        justcal = false;
    }

    if (currentinput === '') {
        currentoper = operation;
        document.getElementById('display').value = `${previnput} ${currentoper}`;
        return;
    }

    if (previnput !== '') {
        calculate();
    }

    currentoper = operation;
    previnput = currentinput;
    currentinput = '';
    document.getElementById('display').value = `${previnput} ${currentoper}`;
}
function calculate()
{
    let result;
    let prev=parseFloat(previnput);
    let current=parseFloat(currentinput);
    switch(currentoper)
    {
     
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert("Cannot divide by zero");
                    return;
                }
                result = prev / current;
                break;
                case '^':
                    result = Math.pow(prev, current);
                    break;
                
            default:
                return;
    }
    currentinput = result.toString();
    currentoper = '';
    previnput = currentinput;
    document.getElementById('display').value = currentinput;
    justcal= true;
}
function clearDisplay()
{
    previnput='';
    currentinput='';
    currentoper='';
    justcal=false
    document.getElementById('display').value='';

}
function squareRoot() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);
    if (number < 0) {
        alert("Cannot take square root of a negative number");
        return;
    }

    let result = Math.sqrt(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}
function sin() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);

    let result = Math.sin(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}
function cos() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);

    let result = Math.cos(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}
function tan() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);

    let result = Math.tan(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}
function sec() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);
    let result = 1/Math.cos(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}
function cosec() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);
    let result = 1/Math.sin(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}
function log() {
    if (currentinput === '') return;

    let number = parseFloat(currentinput);
    let result = Math.log(number);
    currentinput = result.toString();
    previnput = '';
    currentoper = '';
    document.getElementById('display').value = currentinput;
    justCalculated = true;
}



