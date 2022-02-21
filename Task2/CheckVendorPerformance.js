showNotes();

function getVal(){
    let x3 = document.forms["myForm"]["in3"].value;
    if(x3<0){
        alert("Quantity Demanded cannot be negative");
        document.forms["myForm"]["in3"].value="";
        return;
    }
    let x4 = document.forms["myForm"]["in4"].value;
    if(x4<0){
        alert("Quantity Recieved cannot be negative");
        document.forms["myForm"]["in4"].value="";
        return;
    }
    let x5 = document.forms["myForm"]["in5"].value;
    if(x5<0){
        alert("Quantity Returned cannot be negative");
        document.forms["myForm"]["in5"].value="";
        return;
    }
    document.forms["myForm"]["in5"].value=x3-x4;
    if(document.forms["myForm"]["in5"].value<0){
        alert("Quantity Recieved cannot be greater than Quantity Demanded");
        document.forms["myForm"]["in4"].value="";
        document.forms["myForm"]["in5"].value="";
    }
}

function validateForm(){
    let x1= document.forms["myForm"]["in1"].value;
    let x2 = document.forms["myForm"]["in2"].value;
    let x3 = document.forms["myForm"]["in3"].value;
    let x4= document.forms["myForm"]["in4"].value;
    let x5 = document.forms["myForm"]["in5"].value;
    if (x1 == "" || x2 == "" ||x3 == "" || x4 == "" || x5 == "") {
        alert("Please fill the form completely");
        return false;
    }
    return true; 
}

{
// function addElement(){
//     var val=validateForm();
//     if(val==false){
//         return;
//     }
// let x1= document.forms["myForm"]["in1"].value;
// let x2 = document.forms["myForm"]["in2"].value;
// let x3 = document.forms["myForm"]["in3"].value;
// let x4= document.forms["myForm"]["in4"].value;
// let x5 = document.forms["myForm"]["in5"].value;

// const div=document.createElement('div');
// div.className='ddtab';
// const span=document.createElement('span');
// span.className='s1';
// let maintext="Expected Delivery Date: "+x1+"<br>"+
//             "Recieved Date: "+x2+"<br>"+
//             "Quantity Demanded: "+x3+"<br>"+
//             "Quantity Received: "+x4+"<br>"+
//             "Quantity Returned: "+x5+"<br>";
// span.innerHTML=maintext;
// div.append(span);
// const button=document.createElement('button');
// button.className="but3";
// button.innerHTML="Delete";
// div.append(button);
// document.querySelector('.doosradabba').append(div);

// alert("You have successfully added a element "); 
// }
// function delete_ddtab(){
//     confirm("Are you sure ?");
//     document.querySelector('.ddtab').style.display="none";
// }
}

document.querySelector('.but2').addEventListener("click",clear);

function clear(){
    confirm("Are you sure ?");
    document.querySelector('.in-2').value="";
    document.querySelector('.in-1').value="";
    document.querySelector('.in0').value="";
    document.querySelector('.in1').value="";
    document.querySelector('.in2').value="";
    document.querySelector('.in3').value="";
    document.querySelector('.in4').value="";
    document.querySelector('.in5').value="";
}

let btn=document.querySelector('.but1').addEventListener("click",function(e){
    
    var val=validateForm();
    if(val==false){
        return;
    }
    let x_2 = document.forms["myForm"]["in-2"].value;
    let x_1= document.forms["myForm"]["in-1"].value;
    let x0= document.forms["myForm"]["in0"].value;
    let x1= document.forms["myForm"]["in1"].value;
    let x2 = document.forms["myForm"]["in2"].value;
    let x3 = document.forms["myForm"]["in3"].value;
    let x4= document.forms["myForm"]["in4"].value;
    let x5 = document.forms["myForm"]["in5"].value;
    let maintext="Name: "+x_2+"<br>"+
                "BITS ID: "+x_1+"<br>"+
                "Phone Number: "+x0+"<br>"+
                "Expected Delivery Date: "+x1+"<br>"+
                "Recieved Date: "+x2+"<br>"+
                "Quantity Demanded: "+x3+"<br>"+
                "Quantity Received: "+x4+"<br>"+
                "Quantity Returned: "+x5+"<br>";
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(maintext);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    console.log(notesObj);
    showNotes();
});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        // html+='<div class="ddtab" id="'+index+'" onclick="deletetab(this.id)"><span class="s1">'+element+'</span><button class="but3">Delete</button></div>';
        html+=`<div class="ddtab" id="${index}" onclick="delete_ddtab(this.id)"><span class="s1">${element}</span><button class="but3">Delete</button></div>`;
    });

    let notesElm=document.querySelector('.doosradabba0');

    if(notesObj.length!=null){
        notesElm.innerHTML=html;
    }
}

document.querySelector('.in-2').addEventListener("blur",()=>{
    let regex=/^([a-zA-Z]){1,20}$/;
    let str=document.querySelector('.in-2').value;
    if(regex.test(str)){
        document.querySelector('.in-2').style.border="2.8px solid green";    
    }
    else if(str==''){
        document.querySelector('.in-2').style.border="2.5px solid black";    
    }
    else{
        alert("Name should not contain numbers,space or symbols !");
        document.querySelector('.in-2').style.border="2.5px solid red";    
    }
});

document.querySelector('.in-1').addEventListener("blur",()=>{
    let regex=/^202[0-9][AB][1-9AB][A-Z]{2}[0-9]{4}P$/;
    let sti=document.querySelector('.in-1').value;
    if(regex.test(sti)){
        document.querySelector('.in-1').style.border="2.8px solid green";    
    }
    else if(sti==''){
        document.querySelector('.in-1').style.border="2.5px solid black";    
    }
    else{
        alert("Please enter valid id !");
        document.querySelector('.in-1').style.border="2.5px solid red";    
    }
});

document.querySelector('.in0').addEventListener("blur",()=>{
    let regex=/([0-9]){10}/;
    let stp=document.querySelector('.in0').value;
    if(regex.test(stp)){
        document.querySelector('.in0').style.border="2.5px solid green";    
    }
    else if(stp==''){
        document.querySelector('.in0').style.border="2.5px solid black";    
    }
    else{
        // alert("Please enter valid Phone number");
        document.querySelector('.in0').style.border="2.5px solid red";    
    }
});

function delete_ddtab(index){
    console.log("I am deleting "+index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

