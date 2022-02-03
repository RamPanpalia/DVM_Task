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