
var button=document.querySelector("#send");
button.onclick=function(){

var name=document.querySelector("#name");
var email=document.querySelector("#email");
if(name.value==""){
	alert("enter your name");
}
if(email.value==""){
	alert("enter your email");
}
else{
	alert("Your information has been successfully");
}
}