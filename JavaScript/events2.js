let body=document.body;

let section=document.createElement("section");
let btn1=document.createElement("button");
let btn2=document.createElement("button");

console.log(btn1);
console.log(btn2);

btn1.innerHTML="Add square box";
btn2.innerHTML="Add circle box";

body.append(btn1,btn2,section);

section.style.cssText=`
display:flex;
flex-wrap:wrap;`;

btn1.onclick=function(){
    let div=document.createElement("div");
    div.style.cssText=`
    height:100px;
    width:100px;
    border:solid;
    background-color:coral`;


div.onmouseover=function(){
    console.log("you just moved cursur on btn1")
    div.style.cssText+=`
    background-color:orangered;`;
}
div.onmouseout=function(){
    console.log("you just moved cursur out btn1")
    div.style.cssText+=`background-color:coral;`;
};
section.append(div);
}

btn2.onclick=function(){
    let div=document.createElement("div");
    div.style.cssText=`
    height:100px;
    width:100px;
    border:solid;
    border-radius:50%;
    background-color:purple`;


    div.onmouseover=function(){
    console.log("you just moved cursur on btn2")
    div.style.cssText+=`
    background-color:blueviolet;`;
}
div.onmouseout=function(){
    console.log("you just moved cursur out btn2")
    div.style.cssText+=`background-color:purple;`;
};

section.append(div);
};