let outputScreen=document.getElementById('output-screen');
let warnings=document.getElementById('body');
function display(num){
        
        outputScreen.value+=num;
}
function calculate(){
    try{
        result=eval(outputScreen.value);
        if(result){
            outputScreen.value=result;
        }
    }
    catch(error){
       alert("Enter valid inputs");
    }
}
function Clear(){
    outputScreen.value='';
    
}
function del(){
    outputScreen.value=outputScreen.value.slice(0,1);
}