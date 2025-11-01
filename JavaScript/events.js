let body=document.body;

function greet(){
    console.log("Hello Everyone")
}

let h1Tag=document.getElementById("h1Tag");
function applycolor(){
    h1Tag.style.cssText='background-color:purple;color:white;'
}
function removeColor(){
    h1Tag.style.cssText=``;
}
function addNewBox(){
    let addbtn=document.getElementById("addbtn");
    console.log(addbtn);



let p=document.createElement("p");

p.innerHTML="I am new Product box";

p.style.cssText=`text-align:center;
padding:10px;
border:solid;`

body.appendChild(p);
}