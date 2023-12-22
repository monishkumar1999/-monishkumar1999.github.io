let output =document.getElementById('input')



function display(num){  
    // console.log(num)
   output.value=output.value +num;
}

function calculate(){

if(output.value!=0){
        output.value=eval(output.value) //eval(2+22)=24
}

else{
    alert("Enter Something")
}
    // let value = eval(output.value);
    // console.log(value)
}

function Clear(){

    output.value="";  
}

function del(){
    output.value=output.value.slice(0,-1)  // slice 0 for starting  -1 for end

}




























