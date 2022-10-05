var inputName=document.getElementById("inputName")
var inputEmail=document.getElementById("inputEmail")
var inputAdhaar=document.getElementById("inputAdhaar")
var inputAddress=document.getElementById("inputAddress")
var inputNumber=document.getElementById("inputNumber")
var inputAge=document.getElementById("inputAge")
var inputDate=document.getElementById("inputDate")
var submit=document.getElementById("submit")

submit.onclick=function(){
    localStorage.setItem("name",inputName.value);
    localStorage.setItem("email",inputEmail.value);
    localStorage.setItem("adhaar",inputAdhaar.value);
    localStorage.setItem("address",inputAddress.value);
    localStorage.setItem("number",inputNumber.value);
    localStorage.setItem("age",inputAge.value);
    localStorage.setItem("date",inputDate.value);
}

