let output =document.getElementById('input')


output.innerHTML='monosh'
function display(num){  
    // console.log(num)
   output.value +=num;
}

function calculate(){

    try{
        output.value=eval(output.value)
    }
    catch(err){
      
    }


    // let value = eval(output.value);
    // console.log(value)
}

function Clear(){

    output.value="";
}

function del(){
    output.value=output.value.slice(0,-1)
}
