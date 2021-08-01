function buttonclick(msr)
{
    
    document.getElementById("screen").value=document.getElementById("screen").value+msr;
}    
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}