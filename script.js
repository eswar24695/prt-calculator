let boxinput=document.querySelector("#input");
let output=0;
document.querySelector("#allbuttons").addEventListener("click",function(e){
    console.log(e.target.value)
    let target=e.target.value;
    boxinput.value=boxinput.value+target;
})
document.querySelector("#equalto").addEventListener("click",function(){
    let calculatedvalue=eval(boxinput.value);
    output=calculatedvalue;
    boxinput.value=output;
})
document.querySelector("#clr").addEventListener("click",function(){
    output=0;
    boxinput.value="";
})