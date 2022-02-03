function menuFunction(){
  var x=document.querySelector('.navbar');
  var y=document.querySelector('.three');

  if(x.style.height=="35px"){
    x.style.height="200px";
    y.style.border="1px solid black";
    // y.style.background="grey";
    // y.style.color="white";
  }
  else{
    x.style.height="35px";
    y.style.border="2px solid rgb(209, 209, 209)";
    // y.style.background="white";
    // y.style.color="black";
  }
}

var validflag=1;
// for(var i=1;i<=4;i++){
// }
//1
function adjustLabel1(){
var x1=document.getElementById("label"+1);
x1.style.padding="6px 7px";
x1.style.fontSize="15px";
}
//2
function adjustLabel2(){
var x2=document.getElementById("label"+2);
x2.style.padding="6px 7px";
x2.style.fontSize="15px";
}
//3
function adjustLabel3(){
var x3=document.getElementById("label"+3);
x3.style.padding="6px 7px";
x3.style.fontSize="15px";
}
//4
function adjustLabel4(){
var x4=document.getElementById("label"+4);
x4.style.padding="6px 7px";
x4.style.fontSize="15px";
}
var a=" ";
function noValueError(){
validflag=1;
let w = document.forms["form"]["nam"].value;
if (w == "") {
    document.querySelector('.invalid-name').style.display="inline";
    validflag=0;
}
else{
    document.querySelector('.invalid-name').style.display="none";
}
let x = document.forms["form"]["email"].value;
if (x == "") {
    document.querySelector('.invalid-email').style.display="inline";
    validflag=0;
}
else{
    document.querySelector('.invalid-email').style.display="none";
}
let y = document.forms["form"]["phone"].value;
if (y == "") {
    document.querySelector('.invalid-phone').style.display="inline";
    validflag=0;
}
else{
    document.querySelector('.invalid-phone').style.display="none";
}
let z = document.forms["form"]["message"].value;
if (z == "") {
    document.querySelector('.invalid-message').style.display="inline";
    validflag=0;
}
else{
    document.querySelector('.invalid-message').style.display="none";
}
}

function ValuesCorrect(){
}
// alert(a);
// a=a+"An email address is required<br>";
// a=a+"A phone number is required<br>";
// a=a+"Please write your feedback ";
// a=a+"A name is required<br>";

function check(){
// while(validflag!=0){
// }
noValueError();
if(validflag==1){
    alert("You have successfully submitted the form");
}
else{
    alert("Please enter proper values");
    return false;
}
}

function hideForm(){
document.querySelector('.form').style.transform="translateY(-1000px)";
}
function showForm(){
    document.querySelector('.form').style.transform="translateY(0px)";
}