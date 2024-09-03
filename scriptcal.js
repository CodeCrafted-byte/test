let output = document.getElementById("output");
    function display(num){
    output.value += num;
    }

function calc(){
    try{
        output.value = eval(output.value);
    }
    catch{
        alert('invalid');
    }
}

function AC(){
    output.value = "";

}

function dlt(){
    output.value = output.value.slice(0,-1);
}