var mailIput = document.getElementById("mail");
var nameInput = document.getElementById("name");
var domainInput = document.getElementById("domain");
var divideBtn = document.getElementById("divideBtn");
var inputs = document.getElementsByClassName("form-control-lg");

divideBtn.onclick=function(){
    divideMail();
}
function divideMail(){
    var  mailValue = mailIput.value;
    var  atIndex = mailValue.indexOf("@");
    document.getElementById("name").value=mailValue.slice(0,atIndex);
    document.getElementById("domain").value = mailValue.slice(atIndex+1); 
}

clearData.onclick=function(){
    for(i=0 ; i<inputs.length ; i++){
        inputs[i].value=""
    }
}