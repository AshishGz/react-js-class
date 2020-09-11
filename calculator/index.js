var val1='';
var val2='';
var operator='';
var result='';
var displayVal='';

function getValue(val) {
    displayVal=displayVal+val;
    if(operator!=''){

        val2=parseInt(val+''+val2);
    }else{

        val1=parseInt(val+''+val1);
    }
    document.getElementById('result').innerText=displayVal;
}
function getOperator(opr) {
    displayVal=displayVal+opr ;

    operator=opr;
    document.getElementById('result').innerText=displayVal;
}
function calculate() {
console.log(val1);
console.log(val2);

    if(operator=='+'){
        result= val1+val2
    }
    else if(operator=='-'){
        result= val1-val2
    }
    else if(operator=='%'){
        result= val1/val2
    }
    else if(operator=='X'){
        result= val1*val2
    }

   document.getElementById('result').innerText=result;

}
function clearAll() {
     val1=0;
     val2=0;
     operator='';
     result='';
     displayVal='';
    document.getElementById('result').innerText='0';



}
